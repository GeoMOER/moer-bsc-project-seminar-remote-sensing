---
title: "Assignment: Spatial Data Processing"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---

This exercise will lead you through some of the most basic and important steps for spatial data processing.


## Things you need for this worksheet
  * [R](https://cran.r-project.org/){:target="_blank"} — the interpreter can be installed on any operation system.
  * [RStudio](https://www.rstudio.com/){:target="_blank"} — we recommend to use R Studio for (interactive) programming with R.



## Spatial Data Processing

Create a map of Germany with the following features:

- a raster background map showing elevation data,
- a vector map showing the country boundary,
- use the vector map to clip the raster map,
- map point locations denoting your places of birth  
(use a `SpatialPointsDataFrame` object with the correct CRS for this task),
- map the three largest German cities and Marburg with different symbols, and
- get bonus points by adding a legend, rivers, and other cartographic elements as well as


## Uploading assignment to Ilias
Create an HTML file from your Rmd file by knitting it. Then upload both files to Ilias. 
See [here]({{"../unit00/unit00-02_Deliverables.html#assignments" | baseURL }}){:target="_blank"} for where exactly to place your files as well as for the file naming conventions.
{: .notice--info}



<!-- funky chunky

watch out
{: .notice--warning}

OMG
{: .notice--info}




## Aerial images of Marburg Open Forest
The aerial images used within this course cover the area of Marburg Open Forest. They are thankfully provided by the [Hessische Verwaltung für Bodenmanagement und Geoinformation (HVBG)](http://www.hvbg.hessen.de/irj/HVBG_Internet){:target="_blank"}. The dataset consists of several tiles which are visualized in the map below in a reduced spatial resolution.

{% include media url="/assets/misc/aerial_images_map.html" %}
[Full screen version of the map]({{ site.baseurl }}/assets/misc/aerial_images_map.html){:target="_blank"}

-->

