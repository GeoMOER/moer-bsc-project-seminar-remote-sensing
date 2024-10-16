---
title: "Example: Date/Time"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---


Coercing data types to date and/or time information is generally performed using
`as.Date` or either `as.POSIXct` or `as.POSIXlt`. Let's start with `as.Date`:

```r
as.Date("2014-01-01 13:30:35")
```

```
## [1] "2014-01-01"
```
If the character string supplied to the function comes in the ISO standard format,
`as.Date` will notice it automatically. Otherwise, we have to define the format:

```r
as.Date("01.01.2014", "%m.%d.%Y")
```

```
## [1] "2014-01-01"
```
While `as.Date` requires information on the year, month and day withouth any
exception, time information is not handled at all.

If data and time or just time information is required to be handeled explicitly,
the temporal information can be converted to a POSIX data type. In general, there
are two kinds of POSIX classes: (i) POSIXct which handles date/time information as
seconds since a certain time (standard: 1970-01-01 00:00.00 UTC) and (ii)
POSIXlt which stores date/time information as a list. Again, if the data/time
information is not supplied in standard format, one has to define it:

```r
as.POSIXct("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
```

```
## [1] "2014-01-01 13:30:35 CET"
```

```r
as.POSIXlt("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
```

```
## [1] "2014-01-01 13:30:35 CET"
```
For an overview of the formatting syntax see the help pages of the `strptime`
function which handles the conversion. The latter function can also be used
directly for converting character information to POSIXlt:

```r
lt <- strptime("01.01.2014 13:30:35", "%m.%d.%Y %H:%M:%S")
lt
```

```
## [1] "2014-01-01 13:30:35 CET"
```

```r
class(lt)
```

```
## [1] "POSIXlt" "POSIXt"
```
This function is faster than `as.POSIXlt` if the time format
is supplied the ISO way. Otherwise (and maybe even in this case), just forget 
about it.

Aside from theory, a pratical difference between the POSIXct and POSIXlt class
is the way one can add or substract a specific amount of time. For POSIXct, you
have to supply the time interval as seconds:

```r
ct <- as.POSIXct("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
ct + 60 * 30  # add 30 minutes to ct
```

```
## [1] "2014-01-01 14:00:35 CET"
```
While this can also be used for POSIXlt, one can also access the individual 
time information directly:

```r
lt <- as.POSIXlt("01.01.2014 13:30:35", format = "%m.%d.%Y %H:%M:%S")
lt$hour <- lt$hour + 24  # add 24 hours
lt
```

```
## [1] "2014-01-02 13:30:35 CET"
```

To convert a POSIX information back to a character string, one can use the
`strftime` function whichs allows precise formatting of the data/time string and
also has an option for time zone conversion.

```r
ct
```

```
## [1] "2014-01-01 13:30:35 CET"
```

```r
strftime(ct, "%d. %b %y, %H:%M", tz = "UTC")
```

```
## [1] "01. Jan 14, 12:30"
```
Please note that the time zone conversion only works for POSIXct.


Finally, if you want to substract two date/time values, you can use the
resoectuve arithmetic operation or the difftime function to control the layout of
the result (see the help pages of `strptime` for an overview of the layout 
specifications).

```r
lt
```

```
## [1] "2014-01-02 13:30:35 CET"
```

```r
ct
```

```
## [1] "2014-01-01 13:30:35 CET"
```

```r
lt - ct
```

```
## Time difference of 1 days
```

```r
difftime(lt, ct, units = "mins")
```

```
## Time difference of 1440 mins
```
