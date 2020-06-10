## summary of the last sessions
setwd("~/casestudies/course_sen_lidar/")

library(raster)
library(lidR)
library(ranger)
library(caret)
library(tree)

sen = stack("data/sentinel/lahntal_sentinel.tif")

names(sen) <- c("B2", "B3", "B4", "B8")
sen$NDVI <- (sen$B8 - sen$B4) / (sen$B8 + sen$B4)

# writeRaster(sen, filename = "data/sentinel/lahntal_sentinel_NDVI.tif")
# plot(sen)
# Lidar derived MVH
mvh = raster("data/lidar/mvh.tif")


# Terminolgy: 
## sentinel bands are the predictors
## mean vegetation height is the response




# combine mhv with the sentinel bands and convert to a data frame

dset <- stack(crop(sen, mvh), mvh)
dset <- as.data.frame(dset)

# one row of the df was one cell of the raster, the columns were the different layers of the stack
colnames(dset)
head(dset)

plot(dset)

caret::featurePlot(dset, dset$mvh, plot = "scatter")

hist(dset$mvh)


# remove na values
dset <- na.omit(dset)


# get a random sample of pixel from the dset
set.seed(1)
train_id <- caret::createDataPartition(dset$mvh, times = 1, p = 0.6, list = FALSE)

train_df <- dset[train_id,]
test_df <- dset[-train_id,]


## Decision Tree

tmodel = tree(mvh ~ ., data = train_df)
plot(tmpdel); text(tmodel)
summary(tmodel)

## Random Forest

rf_model = ranger::ranger(mvh ~ ., data = train_df, num.trees = 200, mtry = 3, importance = "impurity")
rf_model$variable.importance




p = stats::predict(object = rf_model, train_df)
plot(train_df$mvh, p$predictions)


# Hyperparameter tuning


# define tuning parameters for ranger
tgrid <- expand.grid(.mtry = 2:4,
                     .splitrule = "variance",
                     .min.node.size = 5)

# train the model
rfmodel <- caret::train(mvh ~ ., data = train_df, method = "ranger",
                        tuneGrid = tgrid, trControl = trainControl(method = "cv"),
                        num.trees = 200)

rfmodel


# predict on Sentinel
p <- raster::predict(object = sen, rfmodel)
plot(p)



# save results
writeRaster(p, "output/vegetation_height_prediction.tif")

png("output/vegetation_height_prediction.png")
RStoolbox::ggR(p, geom_raster = TRUE)+
  scale_fill_gradientn(name = "Vegetation height", colors = viridis(50))+
  theme(axis.text.y = element_text(angle = 90, hjust = 0.5),
        axis.title = element_blank(), legend.position = "bottom", panel.background = element_blank(),
        panel.grid = element_line(color = "grey50"))
dev.off()


### Validation

test_df$pred <- stats::predict(object = rfmodel, test_df)
plot(test_df$mvh, test_df$pred)

# square axis
par(pty="s")
plot(test_df$mvh, test_df$pred, asp = 1)


# RMSE = sqrt(mean((prd - obs)^2))
sqrt(mean((test_df$pred - test_df$mvh)^2, na.rm = TRUE))

source("scripts/fun_regression_stats.R")
regressionStats(prd = test_df$pred, obs = test_df$mvh)


