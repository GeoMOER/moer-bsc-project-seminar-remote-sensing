---
title: "Example: CSV I/O"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---



## Reading data from csv files

Reading csv files is realized using the `read.table` function from R's utils
library. The function will return a data frame which contains the information of
the csv file.


```r
df <- read.table("data/diamonds.csv",
                 skip = 4, header = TRUE, sep = ",", dec = ".")
```

As you can see, the `read.table` function gets several arguments (which is common for many functions). The first one gives the filename inclducing the path to the file. 
* `skip = 4` tells the function to skip the first four lines (which are plain text lines in this case and not tabulated values)
* `header = TRUE` tells the function, that the csv file has a header line which is used by `read.table` to name the columns of the returning data frame
* `sep = ","` defines the separator of the individual columns in the data frame
* `dec = "."` defines the decimal separator used in the dataset

A note on the sequence of the arguments: the sequence of the arguments does
not matter as long as you name them explicitly. If you do not use the argument
identifier as it is the case for the first argument, the filename, in the example 
then the sequence matters. To get information on the default sequence and of 
course the general application of the each R function, type `?<function name>`
(e.g. `?read.table`) in an R console.

After you executing the `read.table` function above, the content of the csv file is
stored into a two dimensional data frame called `df` in the example above. 

A quick way to check if everything is fine is to display the first few lines of
the data file using the `head` function (without the 2, it will print 6 lines as a standard setting).

```r
head(df,2)
```

```
##  carat cut     color clarity depth table price     x     y     z
##  <dbl> <ord>   <ord> <ord>   <dbl> <dbl> <int> <dbl> <dbl> <dbl>
##1  0.23 Ideal   E     SI2      61.5    55   326  3.95  3.98  2.43
##2  0.21 Premium E     SI1      59.8    61   326  3.89  3.84  2.31
```

## Writing data to csv files
Writing data is as easy as reading it. Just use the `write.table` function.

```r
write.table(df, file = "data/new.csv", 
            sep = ",", dec = ".")
```
As you can see, you can define any column or decimal separator.

For more information have a look at e.g. the respective [data importing](http://www.statmethods.net/input/importingdata.html) and [data exporting](http://www.statmethods.net/input/exportingdata.html) site at Quick R, have a look into the package 
documentation or search the web.


## Alternative data I/O using RDS
If you stay within R for reading and writing R objects from and to data files, you could also use the serialization of readRDS and saveRDS.

```r
saveRDS(df, file = "data/new.rds")

# Read data to different variable
df2 = readRDS("data/new.rds")
```
