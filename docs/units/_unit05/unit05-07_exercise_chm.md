--- 
title: "Exercise: Lidar products"
---


## DEM, DSM, CHM

In this exersice we want to calculate three of the most common Lidar products:
the **D**igital **E**levation **M**odel, the **D**igital **S**urface **M**odel, and the **C**anopy **H**eight **M**odel.

![DEM, DSM, CHM](https://www.earthdatascience.org/images/courses/earth-analytics/lidar-raster-data-r/lidarTree-height.png)

*source: https://www.earthdatascience.org/images/courses/earth-analytics/lidar-raster-data-r*

---

We already saw, that we could derive a DEM from the Lidar data if we filter the ground points.
What attribute of the LAS file could we use to create the DSM?

Further, we eventually need some sort of grid to rasterize the pointcloud.
Of course `lidR` provides the functions for these tasks. Have a look at `grid_terrain()`, `grid_canopy()` or the more flexible `grid_metrics()`.

* Calculate a DEM, DSM and CHM with a 1 m resolution.
* Save the CHM as a tif.


## Mean vegetation height


The Sentinel Grid topography will now be the basis for the calculation of the mean vegetation height we already saw in the introduction paper.

* Load the first layer of the cropped Lahntal Sentinel-2 scene.
* Crop the layer with the extent of the Lidar Pointcloud.
* Calculate a DEM with the Sentinel tile as a grid template with `grid_metrics()`.
* Normalize the Pointcloud with `lasnormalize()`. What happened?
* Calculate the mean vegetation height for each pixel.
* Save the mean vegetation height as a tif.
* Plot the mean vegetation height as overlay to the Lahntal sentinel scene.








