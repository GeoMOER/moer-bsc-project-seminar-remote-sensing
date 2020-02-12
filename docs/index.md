---
title: Remote sensing for solving challenges of the 21th century
layout: splash
date: '2019-10-15 13:00:00 +0100'
header:
  overlay_color: "#000"
  overlay_filter: 0.6
  overlay_image: "/assets/images/teaser.png"
  caption: 'Photo: [**Environmental Informatics Marburg**](https://www.flickr.com/environmentalinformatics-marburg/)'
  cta_label: Go to course units
  cta_url: "/units.html"
excerpt: Get an overview of species distribution modelling techniques, use R for handling, modelling and visualizing geo-datasets, and conjointly prepare a draft for a peer-reviewed publication
feature_row_intro:
- excerpt: Bachelor level course in [Physical Geography](https://www.uni-marburg.de/de/fb19/studium/studiengaenge/bachelor-geographie/herzlich-willkommen-beim-bachelor-geographie){:target="_blank"} at Marburg University
feature_row_ilos:
- image_path: "/assets/images/envobs_ilos.jpg"
  alt: PC monitor laying in the garden of the institute.
  title: Intended learning outcomes
  excerpt: "Template..."
---

{% include feature_row id="feature_row_intro" type="center" %}

Species distribution modelling (SDM) is a key competence for ecogeographical research and applied nature conservation. 
It allows researchers to estimate current distributions of species and to also predict their future distributions under climate change scenarios.
SDM encompasses various area-wide spatial predictions techniques and requires profound skills related to organizing, handling, analyzing and visualizing of geodata. 

By using the programming environment R, this course will open the door to the cosmos of SDM techniques and will provide a flexible baseline for workflow automation in real research projects. Special emphasis will be on R Markdown for proper documentation and reproducibility. 


# Intended learning outcomes
At the end of this course you should be able to

* distinguish between and apply major SDM techniques,
* feel comfortable with the usage of R,
* analyse, share and reproduce your spatial data with R Markdown,
* use open GIS to manage, visualize and georeference your spatial data,
* include and process remote sensing data in your workflow,
* learn how to implement a publication project in a collaborative approach, and last but not least to
* critically evaluate your analyses and results.


# Course features

This course is intended as a blended learning module in our study program although the provided introductions, explanations and examples might be useful for self-study, too.
Given the enormous body of literature and methods available for SDM, it can only be an entry point for more sophisticated and project-specific modelling techniques.
Each course aims to create area-wide species distribution maps for a group of organisms and a particular area of the world for which hitherto no species richness maps exist.



# Syllabus

| Session | Topic | Content |
|---------|-------|---------|
|| **R Basics** ||
| 01 | The very basics              | Course introduction, expectations, organisational matters, data and information, R, R Studio, R Markdown, GitHub |
| 02 | More basics                  | Working environment, data types, object types, operators, indexing, plotting, reading and writing |
| 03 | Working with spatial data    | Raster data, vector data, coordinate reference systems, reading and writing spatial data, spatial operators, mapping |
|| **Species Distribution Modelling** ||
| 04 | SDM theory                   | Niches, climate space, biotic and abiotic interactions, dispersal   |
| 05 | SDM methods I                | Student presentations and examples with toy data: Profile methods, classical regression models |
| 06 | SDM methods II               | Student presentations and examples with toy data: Machine learning methods, Bayesian methods, others   |
|| **Research project** ||
| 07 | Outline                      | Project introduction, objectives, procedure, available data, data to be obtained |
| 08 | Dealing with real data       | Reading, tailoring, NA handling, reprojecting, describing, visualising, aggregating, merging, subsetting and writing of the project dataset |
| 09 | Dataset complementation I    | Adding raster remote sensing data to the project dataset |
| 10 | Dataset complementation II   | Adding vector distribution data to the project dataset: Georeferencing |
| 11 | Modelling                    | Area-wide predictive modelling |
| 12 | Paper writing                | Candidate journals, discussion of content and individual contributions, drafting of online manuscript template |
|| **Evaluation** ||
| 13 | Evaluation                   | Official course evaluation session, continue manuscript writing |
|| **Wrap up** ||
| 14 | Wrap up                      | Manuscripts submission, time for questions, goodbye |





<!--
3 SDM Techniken, evtl. angelehnt an rspatial HTML https://www.rspatial.org/raster/sdm/index.html
4 GIS Schnittstelle: QGIS Georeferenzieren
5 Fernerkundung Schnittstelle: Umweltlayer besorgen, projizieren, einladen
6 Punktdaten holen (von Christian, Tshikolovits?)
7 Modellieren: Verschieden Techniken besprechen, evtl vorstellen lassen und ausprobieren
9 Auswahl und Vorstellung verschiedener candidate journals
10 Entwurf paper und onlinedokument anlegen
11 Gemeinsames Arbeiten an paper: Aufgaben definieren, verteilen (Literaturrecherche, gemeinsame Literaturdatenbank anlegen)
-->


# Deliverables

The graded course certificate will be based on individual assignments written in R Markdown and published on GitHub.
The individual assignments will be defined in the respective course sessions along with the information whether they will be graded or not.


# Preparation and prerequisites

Basic knowledge of R and of handling spatial data is beneficial, but not required.


# Instructor
{% include author-profile.html %}


<!-- Funkychunky

# Syllabus

| Session | Topic | Content |
|-------|--------|---------|
|| **Data basics** ||
| 01 | First things first | Data and information, R, R Studio, R markdown, GitHub, GitHub classroom |
| 02 | First things second | Working environment, data sets, data types, data structures, logical operators, control structures |
|| **Data exploration** ||
| 03 | Look at your data | Reading and writing (tabulated) data, visual data exploitation, descriptive statistics |
| 04 | Clean your data | Tailoring data sets, fill values and NA, aggregating, merging or sub-setting data sets |
|| **Data modelling** ||
| 05 | Explain your data | Linear regression modelling, confidence intervals, sample tests, variance analysis |
| 06 | Predict your data | Cross-validation |
| 07 | Select your variables | Multiple linear models, feature selection |
| 08 | Predict your non-linear data | Generalized additive models |
| 09 | T-6 and holding | Build-in hold to finish up the explanation sessions |
| 10 | Predict your temporal data | Auto-correlation, AR and ARIMA models |
| 11 | Explain your temporal data | Decomposing time series |
|| **Visualization** ||
| 12 | Visualize your data | Publication quality graphics |
|| **Evaluation** ||
| 13 | Evaluation | Official course evaluation session |
|| **Wrap up** ||
| 14 | Wrap up | Time for questions, specific data analysis problems, goodbye |

-->

