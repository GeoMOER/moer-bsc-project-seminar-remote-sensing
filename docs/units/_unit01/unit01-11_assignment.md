---
title: "Assignment: Hello R"
toc: true
header:
  image: "/assets/images/title_RS_5-1.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/en/fb19/disciplines/physisch/environmentalinformatics){:target="_blank"}'
---

This worksheet introduces you to R, R scripts and R markdown. Your submission will be pushed to your class repository at GitHub. After completion you should have gained some experience in running R commands within scripts, R markdown for running code and documentation within one file and Git/GitHub.

## Things you need for this worksheet
  * [R](https://cran.r-project.org/){:target="_blank"} — the interpreter can be installed on any operation system.
  * [RStudio](https://www.rstudio.com/){:target="_blank"} — we recommend to use R Studio for (interactive) programming with R.
  * [Git](https://git-scm.com/downloads){:target="_blank"} environment for your operating system. For Windows users with little experience on the command line we recommend [GitHub Desktop](https://desktop.github.com/){:target="_blank"}.

## Hello R and GitHub submission
Please write an R script as an Rmd file with html output for the following task and commit it to your GitHub-based learning log:

1. Assign the value of five to a variable called `a` and the value of two to a variable called `b`.
1. Compute the sum, difference, product and ratio of a and b (a always in the first place) and store the results to four different variables called `r1`, `r2`, `r3`, and `r4`.
1. Create a vector `v1` which contains the values stored within the four variables from step 2.
1. Add a fifth entry to vector `v1` which represents `a` by the power of `b` (i.e. `a**b`).
1. Show the content of vector `v1` (e.g. use the `print` function or just type the variable name in a separate row).
1. Create a second vector `v2` which contains information on the type of mathematical operation used to derive the five results. Hence this vector should have five entries of values *sum*, *difference*,...
1. Show the content of vector `v2`.
1. Combine the two vectors `v1` and `v2` into a data frame called `df`. Each vector should become one column of the data frame so you will end up with a data frame having 5 rows and 2 columns.
1. Make sure that the column with the data of `v1` is named *Results* and `v2` is named *Operation*.
1. Show the entire content of `df`.
1. Show just the entry of the cell in the second row and first column.

Create an HTML file from your Rmd file by knitting it. Then upload both files to Ilias. 
See here for where exactly to place your files as well as for the file naming conventions.
{: .notice--info}
