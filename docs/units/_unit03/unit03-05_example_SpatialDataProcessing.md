---
title: 'Example: Workflow in R'
toc: yes
toc_label: In this example
---

This example provides a schematic workflow for processing vector and raster data in R. 




## Get raster data

Firstly, we import some raster data into our working environment
Therefore, we need to load a package to handle raster data in R, preferable `raster`.
If the package is not available, we need to install it first with `install.packages("raster")`.


```r
library("raster")
```

We now can use the function `getData()` to download some raster data: In this example a global map of precipitation values at 10 minutes spatial resolution.


```r
prec <- getData("worldclim", var="prec", res=10)
``` 


Fortunately, the downloaded data already have a correct CRS:


```r
## class      : RasterStack 
## dimensions : 900, 2160, 1944000, 12  (nrow, ncol, ncell, nlayers)
## resolution : 0.1666667, 0.1666667  (x, y)
## extent     : -180, 180, -60, 90  (xmin, xmax, ymin, ymax)
## crs        : +proj=longlat +datum=WGS84 +ellps=WGS84 +towgs84=0,0,0 
## names      : prec1, prec2, prec3, prec4, prec5, prec6, prec7, prec8, prec9, prec10, prec11, prec12 
## min values :     0,     0,     0,     0,     0,     0,     0,     0,     0,      0,      0,      0 
## max values :   885,   736,   719,   820,   955,  1850,  2088,  1386,   904,    980,    893,    914 
``` 


... and can be quickly and simply visualized with `plot()`. 
Note that the object type is a `RasterStack` with 12 layers, one for each month of the year.

```r
plot(prec$prec1)
```


<img src="{{ site.baseurl }}/assets/images/maps/map_prec1_global.png" style="display: block; margin: auto;" />



## Get vector data

Secondly, we add some vector data to our working environment. For example the administrative boundaries of France at the country level:


```r
fra <- getData('GADM', country='FRA', level=0)
```

Fortunately, also these downloaded data already have a CRS, defined by a _proj4 string_:

```r
## class       : SpatialPolygonsDataFrame 
## features    : 1 
## extent      : -5.143751, 9.560416, 41.33375, 51.0894  (xmin, xmax, ymin, ymax)
## crs         : +proj=longlat +datum=WGS84 +no_defs +ellps=WGS84 +towgs84=0,0,0 
## variables   : 2
## names       : GID_0, NAME_0 
## value       :   FRA, France 
```

Note that the object type here is a `SpatialPolygonsDataFrame` (defined in package `sp`) with one _feature_ (i.e. with a single polygon), 
a certain _extent_ (which can also be extracted with `extent(fra)`), a _CRS_ (which also be extracted with `CRS(fra)`), and two _variables_ with some _values_ (in this case country abbreviation and name).


Also vector data can quickly and simply be visualized with `plot()`


```r
plot(fra)
```

<img src="{{ site.baseurl }}/assets/images/maps/map_france_GADM.png" style="display: block; margin: auto;" />



## Set extent

We can use the extent of one spatial object to _crop_ (i.e. to cut out) another spatial object.
In this example, we will crop the raster map(s) with the extent defined in the vector object. 
This is going to work because both objects have the same coordinates and CRS.
Note that `crop()` processes all layers in the input raster stack.



```r
cropped_prec <- crop(prec, extent(fra))
```

For function arguments see `?crop()`. Now we have precipitation maps of France:

```r
plot(cropped_prec$prec1)
```


<img src="{{ site.baseurl }}/assets/images/maps/map_prec_cropped.png" style="display: block; margin: auto;" />



## Vector operations

A simple vector operation would be to clip a spatial object not by the extent of another spatial object but by features or polygons of any shape.

We will now use the country boundary of France for clipping of the already cropped precipitation maps with the `mask()` function of the raster package:

```r
clipped_prec <- mask(cropped_prec, fra)
```


The result is a `RasterBrick` object with 12 layers, one for each month of the year (the difference to a `RasterStack` as obove is only how memory is allocated, what does not matter here). 


Again, the result can quickly and simply be visualized with `plot()`


```r
plot(clipped_prec$prec1)
```

<img src="{{ site.baseurl }}/assets/images/maps/map_prec_clipped.png" style="display: block; margin: auto;" />


## Raster operations

The created RasterBrick now contains precipitation values of France on a _monthly_ basis. 
What if we want to have a single precipitation layer with _annual_ precipitation values?
We would need to sum up the values of all 12 precipitation layers for each pixel location.
This can be done by:

```r
clipped_prec_sum <- sum(clipped_prec)
```

An alternative would be to use `stackApply()` (see `?stackApply()` for details. Note the `na.rm` argument). 

```r
clipped_prec_sum_2 <- raster::stackApply(clipped_prec, rep(1,12), sum, na.rm=FALSE)
```

The resulting raster map looks like this: 


```r
plot(clipped_prec_sum)
```

<img src="{{ site.baseurl }}/assets/images/maps/map_prec_clipped_sum.png" style="display: block; margin: auto;" />

Note the different value range, which now stands for the annual amount of precipitation (in mm).



## Mapping

We now combine all the above created spatial objects to create a single simple map:

```r
plot(clipped_prec_sum)
plot(fra, add=T)
points(2.349014, 48.864716, pch=8, cex=2) # roughly the location of Paris
```

<img src="{{ site.baseurl }}/assets/images/maps/FirstSimpleMap.jpg" style="display: block; margin: auto;" />



## Write out

The above created overlay of maps can be written to file as an ordinary image with e.g.

```r
jpeg("FirstSimpleMap.jpg")
plot(clipped_prec_sum)
plot(fra, add=T)
points(2.349014, 48.864716, pch=8, cex=2)
dev.off()
```






Note that this is a raster image without geographic information.
If you want to write out the spatial objects with geographic information, use e.g. `raster::writeRaster()` or `raster::shapefile()`. 




## Other important functions

* Reading in raster data from file: `raster::raster()`
* Reading in vector data from file: `rgdal::readOGR()`


## More information

For more details see [www.rspatial.org](https://www.rspatial.org/raster/spatial/index.html){:target="_blank"} and 
[Geocomputation with R](https://geocompr.robinlovelace.net/spatial-operations.html#spatial-vec){:target="_blank"}



