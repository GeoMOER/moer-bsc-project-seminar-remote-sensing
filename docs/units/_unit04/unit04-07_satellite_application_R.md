---
title: "Learning by Doing: Sentinel-2 Application"
--- 


In this exercise we want to estimate the area of water bodies in our Sentinel scene from Lahntal.
As a start, load in your prepared Sentinel stack from Lahntal from the previous exercise.


## "Vegetation" indices

* Get familiar with the `Normalized difference vegetation index (NDVI)`:
	* How is the index calculated?
	* How can it help us with the identification of water bodies?
* Calculate the NDVI for the Lahntal stack.
* Plot the NDVI.
* Add the NDVI as a new layer to the existing Lahntal stack.
* Save the modified stack as a tif.

## Water bodies

* Divide your NDVI layer into two groups: water and everything else. You can use the `raster::reclassify` function.
* Now it is just a matter of counting pixels to find out the area of water bodies.



