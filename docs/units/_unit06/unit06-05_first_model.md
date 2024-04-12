---
title: "Exersice: My first model"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---

* Install the caret package
* Install the ranger package
* Install the tree package

## Decision trees

* Split your data into a training and testing set with `caret::createDataPartition()`. The training set should inherit 60% of the data. The testing set the other 40% accoringly.
* Train a decision tree with `tree::tree()` using your training set.
* Plot the decision tree. You have to use both `plot(model)` and `text(model)` to get a plot.


## Random forest


Now we train many more trees: a random forest.

* Train a random forest model with `ranger::ranger()` using your training set.
* Predict the mean vegetation height on your testing set.
* Create a scatterplot with the actual mean vegetation height on the x-axis and the predicted mean vegetation height on the y-axis.


## Assignment
Write everything in a Rmd file, knitr it and upload the html file to Ilias.



