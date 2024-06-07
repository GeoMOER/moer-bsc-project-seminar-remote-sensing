---
title: "A word about classifications" 
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---

In this course, we focused on and made use of regression models. We used Random Forest to predict a continuous variable (the mean vegetation height) and also used a continuous error metric, the root mean squared error.
If we do not have a continuous variable to predict (e.g. forest types or more broadly the landcover) we speak of classification models.
No worries! Apart from some minor tweaks, the workflow is exactly the same as with regression models (we even can use the same model type).



```yaml

library(terra)
library(caret)
library(ranger)
library(RStoolbox)

# Land cover classification using random forest model
setwd(".../data/")

# Again use the predictors from the Sentinel. Use the "lahntal_sentinel_NDVI.tif" data from ILIAS
sen = rast("lahntal_sentinel_NDVI.tif")
# Assign name
names(sen) <- c("blue", "green", "red", "nir", "ndvi")


# Download the training data "classification_data.gpkg" from ILIAS
lc = terra::vect(".../Data/classification_data.gpkg")

# Check the coordinate reference information (crs) and match the crs
terra::crs(lc)
terra::crs(sen)

crs(sen) = "EPSG:25832"
crs(sen)
# Plot sen and lc 
plotRGB(sen, stretch = "lin")
plot(lc["Class"], add=T, col="red")
```

## Create data frame

(see: The Modelling workflow)


```yaml
# Extract pixel values for each points

val <- terra::extract(sen, lc, df = TRUE)

# create a look-up-table with point ID and its class
point_class <- data.frame(ID = val$ID, Class = lc$Class)
# Class=1 is Builtup, Class=2 is forest, and Class=3 is cropland
# add the class information to the pixel values

val$Class <- point_class$Class

# save
saveRDS(val, file = ".../Data/training_set.RDS")
```




## Modelling

```yaml

#  read the training_set.RDS
df = readRDS("..../Data/training_set.RDS")
head(df)
# delete the point ID (for now!)
df$ID = NULL
# convert the "Class" data type from integer to factor
str(df)
df$Class = factor(df$Class)
str(df)
# Remove NA values from the dataframe
df=na.omit(df)
# Build the classification model
set.seed(1)
train_id <- caret::createDataPartition(y = df$Klasse, times = 1, p = 0.6, list = FALSE)
train_df <- df[train_id,]
test_df <- df[-train_id,]


train_id <- caret::createDataPartition(y = df$Class, times = 1, p = 0.6, list = FALSE)
train_df <- df[train_id,]
test_df <- df[-train_id,]


# define tuning parameters for ranger

# for classification we need a different split rule!

tgrid <- expand.grid(.mtry = 1:5,
                     .splitrule = "gini",
                     .min.node.size = c(5,10,15,20))

# train the model
rfmodel <- caret::train(Class ~ ., data = train_df, method = "ranger",
                        tuneGrid = tgrid, trControl = trainControl(method = "cv"),
                        num.trees = 100)
rfmodel
# Save the model
saveRDS(rfmodel, "D:/Data/lcc_ranger.RDS")

```


## Visuals

```yaml

# Run the land cover classification using the Sentinel raster predictors
rfmodel = readRDS("D:/Data/lcc_ranger.RDS")
rfmodel

p = raster::predict(object = sen, rfmodel, na.rm=T)
plot(p)
p

# Improve the visualization of the land cover classification map
RStoolbox::ggR(p, geom_raster = TRUE)+
  scale_fill_manual(name = "class", values = c("red",  "darkgreen", "yellow"), labels=c("Builtup","Forest","Cropland"))+
  theme(axis.text.y = element_text(angle = 90, hjust = 0.5),
        axis.title = element_blank(), legend.position = "bottom", panel.background = element_blank(),
        panel.grid = element_line(color = "grey50"))


```

## Validation

```yaml

test_df$Pred <- stats::predict(object = rfmodel, test_df)

# contingency table or error matrix
ct = table(test_df$Class, test_df$Pred)
ct

# accuracy
# sum of all correct classifications / n

table(test_df$Class == test_df$Pred)
sum(test_df$Class == test_df$Pred) / nrow(test_df)


# kappa value
# takes into account the class sizes and expected probabilities

# kappa of 0: random classification
# kappa of 1: agreement

kappa(ct)

```











