---
title: "Remote sensing: Linking LiDAR and satellite data with machine learning"
authors:
  - zeuss
  - temesgen
layout: splash
date: '2019-10-15 13:00:00 +0100'
header:
  overlay_color: "#000"
  overlay_filter: 0.6
  overlay_image: "/assets/images/title_RS.png"
  caption: 'Photo: [**Lab of Environmental Informatics**](https://www.uni-marburg.de/de/fb19/disciplines/physisch/umweltinformatik/umweltinformatik){:target="_blank"}'
  cta_label: Go to course units
  cta_url: "/units.html"
excerpt: Handle up-to-date remote sensing data, make spatial predictions with machine learning, and become familiar with advanced remote sensing modelling in R
feature_row_intro:
- excerpt: Bachelor level course in [Physical Geography](https://www.uni-marburg.de/de/fb19/studium/studiengaenge/bachelor-geographie/herzlich-willkommen-beim-bachelor-geographie){:target="_blank"} at Marburg University
feature_row_ilos:
- image_path: "/assets/images/envobs_ilos.jpg"
  alt: PC monitor laying in the garden of the institute.
  title: Intended learning outcomes
  excerpt: "Template..."
---

{% include feature_row id="feature_row_intro" type="center" %}

<!-- Funkychunky -->

Monitoring biodiversity and its change through space and time is a key challenge for ecogeographical research. 
Linking up-to-date remote sensing data with machine learning has been shown to be a powerful complementation of labor-intensive field work in order to derive area-wide biodiversity indices, which also capture larger spatiotemporal scales. 

Using LiDAR and Sentinel data as example, this course will be a foundation for acquiring, managing, and modelling different types of geodata and will provide a solid baseline for workflow automation with remote sensing data in R.


# Intended learning outcomes
At the end of this course you should be able to

* feel comfortable with the usage of R,
* know the basics of remote sensing theory and machine learning,
* handle LiDAR and Sentinel data,
* use random forest for spatial predictions,
* include and process different types of remote sensing data in a single workflow, and
* apply all of the above to a real-world example.



# Course features

This course runs on a weekly basis (Mondays, 14:15 - 15:45, **starting 21.10.2024**). Course units will consist of one topic (see table below), different ways of their practical application in R and an exercise for applying your new skills. 
The topics will be presented as online readers, screencasts, videos or collections of blog posts and examples of other researchers. 
You can do the exercises at your own pace and we will discuss them in the subsequent session. 

Organizational matters and further details can be found [here]({{"unit00/unit00-01_Digital_learning.html" | baseURL }}){:target="_blank"} and will be discussed during our first kick-off session.



# Course overview

![Course Workflow]({{ site.baseurl }}/assets/images/course_workflow.svg)<!-- -->



# Session overview

| Session | Date | Topic | Content |
|---------|-------|---------|
| **R Basics** ||||
| 01 | 21.10.2024 | The very basics              | Course introduction, expectations, organisational matters, data and information, R, R Studio |
| 02 | 28.10.2024 | More basics                  | Working environment, data types, object types, operators, indexing, plotting, reading and writing |
| 03 | 04.11.2024 | Working with spatial data    | Raster data, vector data, coordinate reference systems, reading and writing spatial data, spatial operators, mapping |
| **Iteration I: Start simple** ||||
| 04 | 11.11.2024 | Remote Sensing Theory        | Sensor types, spectral properties, satellites, data acquisition, temporal aspects  |
| 05 | 18.11.2024 | Remote Sensing in R		     | Satellite data processing, simple lidar parameters, data management|
| 06 | 25.11.2024 | Modelling Theory             | Machine learning basics, Random Forest, validation  |
| 07 | 02.12.2024 | Modelling in R               | Preprocessing, classification trees, random forest, validation|
| **Iteration II: Reality** ||||
| 08 | 09.12.2024 | Advanced Modelling           |Predictions, outlook|
| 09 | 16.12.2024 | Built-in hold||
| 10 | 13.01.2025 | Advanced Remote Sensing in R |Spectral Indices, spatial operations, resampling, merging, and Project overview|
| 11 | 20.01.2025 | Built-in hold||  	     
| 12 | 27.01.2025 | Built-in hold||
| 12 | 03.02.2025 | Built-in hold||
| 13 | 10.02.2025 | **Wrap up**                  | Get feedback from your peers and instructors, tell us how you self-assess your skills and happy holidays |


# Deliverables

The graded course certificate will be based on an individual assignment ("Hausarbeit"), which builds upon the processing workflow established during the course.



<!--Note: Prüfungsleistung ist eine Hausarbeit über ein verwandtes Thema (anderes Gebiet, anderes Modell, andere Daten, etc.) -->


# Preparation and prerequisites

Basic knowledge of R and of handling spatial data is beneficial, but not required.

<!-- <br />  -->


Also check our additional material for teaching basic R skills, 
which can be found [here](https://geomoer.github.io/moer-base-r/){:target="_blank"}.
{: .notice--success}




## Team

{% for author in site.data.authors %}
  {% include author-profile.html %}
 <br />
{% endfor %}



