---
title: "Learning by Doing: Sentinel-2 Application"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
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
* Save the modified stack as a tif file.

## Water bodies

* Divide your NDVI layer into two groups: water and everything else. You can use the `terra::classify` function.
* Now it is just a matter of counting pixels to find out the area of water bodies.

## Uploading assignment to Ilias
Finalize the two assignments (i.e., Learning by Doing: Sentinel-2 Preparation and Sentinel-2 Application) and create an HTML file from your Rmd file by knitting it. Then upload both files (i.e., Rmd and html) to Ilias. 
See [here]({{"../unit00/unit00-02_Deliverables.html#assignments" | baseURL }}){:target="_blank"} for where exactly to place your files as well as for the file naming conventions.
{: .notice--info}








