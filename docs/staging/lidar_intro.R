

library(lidR)
library(sp)
library(rgdal)


# load in sample area
a = readOGR("casestudies/course_sen_lidar/data/lidarArea.gpkg")


# full lidar set (needs around 12 GB in RAM)
mof = readLAS("data/rs/lidar/mof/mof_lidar_2018.las")

# crop out the sample area
# it still takes 550 mb RAM
sub_mof = lasclip(mof, a)

# clean up the RAM
rm(mof)
gc()


writeLAS(sub_mof, "casestudies/course_sen_lidar/data/lidar_2018_clipped.las")

#--------------------------------

# Visual Data Exploration


# look at columns
str(sub_mof@data)

plot(sub_mof)
plot(sub_mof, color = "Classification")
plot(sub_mof, color = "Intensity")


# filter functions

mof_intense = lasfilter(sub_mof, Intensity > 300)
plot(mof_intense)

plot(lasfilter(sub_mof, Classification == 2))
unique(sub_mof@data$Classification)




