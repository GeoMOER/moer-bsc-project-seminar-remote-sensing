---
title: "Example: LidR I/O and clipping"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---


Since LiDAR data can have quit large file sizes and need some processing power,
we only take a look at a small example area. This area was created with the script below.
It only uses simple Input / Output commands as well as `lidR::lasclip` which is the aquivalent to `terra::crop`.


```yaml
library(lidR)
library(terra)
library(sp)


# load in sample area. 
a = vect(".../data/lahntalgpkg.sec")


# This is a smaller lidar coverage. Full lidar set (needs around 12 GB in RAM)
mof = readLAS("/data/mof_lidar_2018_pd5.las")

# Check if the crs for study area "a" and lidar data "mof" are the same. 
# If not, project "a" to the lidar "mof" crs using `project` function from `terra` package. 

# Project the crs
b= terra::project(a,"EPSG:25832")
# Note the sample are "b" is a `SpatialVector` object but `clip_roi` from the `lidR` package requires a data.frame-like simple feature `sp` object. 
# Use the `st_as_sf` function from the `sp`package to convert "b" from `SpatialVector` to `sp` object.
c=sf::st_as_sf(b)

# crop out the sample area using `clip_roi` from the `lidR` package
sub_mof = clip_roi(mof, c)

# it still takes 921 mb RAM


# clean up the RAM
rm(mof) # removes a object from R
gc() # "garbage collector" -> cleans up the RAM

# save the clipped lidar data to your local drive
writeLAS(sub_mof, ".../data/lidar_2018_clipped.las")

```

