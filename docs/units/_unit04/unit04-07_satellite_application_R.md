---
title: "Learning by doing: Sentinel-2 application"
--- 


In this exercise we want to estimate the area of water bodies in our Sentinel Scene from Lahntal.
So, load in your prepared Sentinel stack from Lahntal from the last exersice.


## "Vegetation" indices

* Get familiar with the `Normalized difference vegetation index (NDVI)`:
	* How is the index calculated?
	* How can it help us with the identification of water bodies?
* Calculate the NDVI for the Lahntal stack.
* Plot the NDVI.
* Add the NDVI as a new layer to the existing Lahntal stack.
* Save the modified stack as a tif.

## Water bodies

* Divide your NDVI Layer into two groups. Water and everything else. You can use the `raster::reclassify` function.
* Now its just a matter of counting pixels to find out the area of water bodies.



