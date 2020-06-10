---
title: "Exersice: My first model"
---

* Install the caret package
* Install the ranger package
* Install the tree package


* Split your data into training and testing set with `caret::createDataPartition()`. The training set should inherit 60% of the data. The testing set the other 40% accoringly.
* Train a decision tree with `tree::tree()` with your training set.
* Plot the decision tree. You have to use both `plot(model)` and `text(model)` to get a plot.


Now we train many more trees: a random forest.

* Train a random forest model with `ranger::ranger()` with your training set.
* Predict the mean vegetation height of your testing set.








