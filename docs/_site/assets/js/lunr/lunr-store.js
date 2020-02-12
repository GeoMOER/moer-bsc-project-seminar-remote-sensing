var store = [{
        "title": "The very basics",
        "excerpt":"Go through a brute force introduction into R, R Markdown, the RStudio IDE, version management with Git and GitHub’s classroom functionality to get ready for solving the upcoming assignment problems and submitting your solutions. Learning objectives At the end of this unit you should be able to tell the difference...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-01_the_very_basics.html",
        "teaser":null},{
        "title": "R and RStudio",
        "excerpt":"To start with a clarification: R is the statistical programming language you will use in this course (and which is used by many other scientists). With R you will write tailored scripts and functions to implement your analysis workflow. RStudio is an integrated development environment (IDE) for R and other...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-02_r_rstudio.html",
        "teaser":null},{
        "title": "Example: Vector Basics",
        "excerpt":"Vectors are the basis for many data types in R. Creating a vector A vector is created using the c function. Here are some examples: my_vector_1 &lt;- c(1,2,3,4,5) print(my_vector_1) ## [1] 1 2 3 4 5 my_vector_2 &lt;- c(1:10) print(my_vector_2) ## [1] 1 2 3 4 5 6 7 8...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-03_structures_vectors.html",
        "teaser":null},{
        "title": "Example: List Basics",
        "excerpt":"Lists are one of the most flexible data structures in R. Creation of a list A list is created with the list function. Here are some examples: my_list_1 &lt;- list(c(1,2,3,4,5)) my_list_1 ## [[1]] ## [1] 1 2 3 4 5 my_list_2 &lt;- list(x=c(2.5, 3.5), y=c(5, 10)) my_list_2 ## $x ##...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-04_structures_lists.html",
        "teaser":null},{
        "title": "Example: Data Frame Basics",
        "excerpt":"Data frames are one of the most heavily used data structures in R. Creation of a data frame A data frame is created from scratch by supplying vectors to the data.frame function. Here are some examples: x &lt;- c(2.5, 3.5, 3.4) y &lt;- c(5, 10, 1) my_df &lt;- data.frame(x, y)...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-05_structures_data_frames.html",
        "teaser":null},{
        "title": "Example: Coercion",
        "excerpt":"Data types Coercion of data elements into one of the basic R data types is straight forward. Just add “as.” to the data type to obtain the respective function. x &lt;- c(1.4, 2.5, 3.6, 4.0) class(x) ## [1] \"numeric\" as.character(x) ## [1] \"1.4\" \"2.5\" \"3.6\" \"4\" as.integer(x) ## [1] 1...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-06_coercion.html",
        "teaser":null},{
        "title": "Example: Extracting Substrings",
        "excerpt":"Extracting or replacing parts of a substring is quite straight forward but requires some more typing than e.g. in Python. The main function you will use is the substring function. The substr function Let us extract parts of a given string starting with the second and ending with the seventh...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-07_substring.html",
        "teaser":null},{
        "title": "Example: R Markdown with html output",
        "excerpt":"This page shows how a compiled R markdown file looks like (in fact, all code examples in this course were compiled with R markdown). This is a header This is an R Markdown document. Markdown is a simple formatting syntax for creating HTML, PDF, and MS Word documents. For more...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-08_Rmd_html.html",
        "teaser":null},{
        "title": "Git and GitHub",
        "excerpt":"To start with a clarification: Git is the version control system you will use in this course (and which is used by many other developers all around the world). With Git you will manage something called repository which is the place where you manage your software project (i.e. a folder...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-09_git_github.html",
        "teaser":null},{
        "title": "Assignments and Working Environment",
        "excerpt":"A note on individual learning log assignments with GitHub Within this course, you will individually submit your personal solutions for the course assignments to your personal GitHub-hosted learning log, i.e. your personal classroom repository. Don’t get confused about “your personal repository”. Once you have a GitHub account, you can create...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-10_notes_on_assignments.html",
        "teaser":null},{
        "title": "Marked Assignment: Hello R, Hello GitHub",
        "excerpt":"This worksheet introduces you to R, R scripts and R markdown. Your submission will be pushed to your class repository at GitHub. After completion you should have gained some experience in running R commands within scripts, R markdown for running code and documentation within one file and Git/GitHub. Things you...","categories": ["01 The very basics"],
        "tags": ["Unit","01"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit01/unit01-11_assignment.html",
        "teaser":null},{
        "title": "More basics",
        "excerpt":"Become familiar with basic operators, loop and decision structures, and code styling before focussing on reading and writing data, computing summary statistics, and visual data exploration. Finally check the integrity of datasets and clean them up to ensure that the data basis for subsequent analyses is consistent. Learning objectives At...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-01_more_basics.html",
        "teaser":null},{
        "title": "Operators",
        "excerpt":"Control structures require logical or maybe also boolean operators which test simple relationships between two or more variables. Depending on the test results, control structures can be used to decide how the program should go on. Logical operators The basis for deciding between different options during runtime are logical operators....","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-02_operators.html",
        "teaser":null},{
        "title": "Decisions and Loops",
        "excerpt":"Decision structures are like junctions in the analysis workflow and decide which way to go during runtime. Loops are the workhorses for repeating the same computations on different subsets of the data. If-then-else If-then-else decisions are useful if your computation needs different workflows for different variable values. # Pseudocode if(\"&lt;some...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-03_decisions_loops.html",
        "teaser":null},{
        "title": "Example: If-then-else",
        "excerpt":"If-then-else statements are the controlling structures in each program. The most simplest form is: a &lt;- 5.0 b &lt;- 10.0 if (a &lt; b) { print(\"a is smaller than b\") } ## [1] \"a is smaller than b\" Such an if-statement can be extended by n if-else statements and -...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-04_if-then-else.html",
        "teaser":null},{
        "title": "Example: For-loops",
        "excerpt":"For loops are the mother of all repeating structures which enable the execution of certain code blocks for multiple times. For loops are usefull if the number of necessary repititions is known at the starting time of the loop (which is not necessarily the starting time of the program!). In...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-05_for-loops.html",
        "teaser":null},{
        "title": "Exercise: Loop and Conquer",
        "excerpt":"This worksheet provides some control structure and loop examples to help you getting familiar with these probably most important properties of any programming language. Things you need for this worksheet R — the interpreter can be installed on any operation system. RStudio — we recommend to use R Studio for...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-05b_loop_exercise.html",
        "teaser":null},{
        "title": "Code Styling",
        "excerpt":"Using a consistent and intuitive coding style helps both you as the programmer and others as re-users of your source code. A comprehensive coding style helps to read and understand the code and hence reduces the intrinsic complexity of programming. Suggested code style for a starter In the web, there...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-06_code_style.html",
        "teaser":null},{
        "title": "Tabulated Data I/O",
        "excerpt":"Reading or writing tabulated data into or from a data frame is a quite common task in data analysis. You could use the read.table function for this. df &lt;- read.table(&lt;file&gt;, header = FALSE, sep = “”, dec = “.”, skip = 0, ...) write.table(df, file = &lt;file&gt;, sep = “...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-07_data_io.html",
        "teaser":null},{
        "title": "Visualization",
        "excerpt":"Do not wait until the very final analysis stage to produce some publication quality graphics but produce fast (not necessarily nice) visualizations all the way through your data analysis. Otherwise you will not utilize the best neural network infrastructure you have available: your brain and it’s ability to identify patterns....","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-08_visualization.html",
        "teaser":null},{
        "title": "Example: CSV I/O",
        "excerpt":"Readading data from csv files Reading csv files is realized using the read.table function from R’s utils library. The function will return a data frame which contains the information of the csv file (example taken from here) . df &lt;- read.table(paste0(envrmt$path_data_csv, \"/AI001_gebiet_flaeche.csv\"), skip = 4, header = TRUE, sep =...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-09_csv_io.html",
        "teaser":null},{
        "title": "Example: Aggregation Statistics",
        "excerpt":"Summarizing a data set The most straight forward function which returns some aggregated statistical information about a data set is summary. a &lt;- c(\"A\", \"B\", \"C\", \"A\", \"B\", \"A\", \"A\") b &lt;- c(\"X\", \"X\", \"X\", \"X\", \"Y\", \"Y\", \"Y\") c &lt;- c(1, 2, 3, 4, 5, 6, 7) d &lt;-...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-10_aggregating.html",
        "teaser":null},{
        "title": "Example: Visual Data Exploration",
        "excerpt":"Visual data exploration should be one of the first steps in data analysis. In fact, it should start right after reading a data set. The following examples are based on a data set showing the percentage fraction of settlement, recreational, agricultural, and forest areas for each rural district in Germany....","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-11_exploration.html",
        "teaser":null},{
        "title": "Clean Your Data",
        "excerpt":"Check the integrity of datasets and clean them up to ensure that the data basis for your analysis is consistent. Learning objectives At the end of this unit you should be able to identify some common problems in the structure of data frames, subset, merge, separate a data frame in...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-12_clean_your_data.html",
        "teaser":null},{
        "title": "Example: Missing Values",
        "excerpt":"Handling missing values is straight forward. Let’s start with a vector with one NA value at position 3. Please note that NA is not inside quotation marks since it is not a string but a special type of logical data type. x &lt;- c(\"A\", \"B\", NA, \"D\") To check, if...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-13_na.html",
        "teaser":null},{
        "title": "Example: Date/Time",
        "excerpt":"Coercing data types to date and/or time information is generally performed using as.Date or either as.POSIXct or as.POSIXlt. Let’s start with as.Date: as.Date(\"2014-01-01 13:30:35\") ## [1] \"2014-01-01\" If the character string supplied to the function comes in the ISO standard format, as.Date will notice it automatically. Otherwise, we have to...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-14_datetime.html",
        "teaser":null},{
        "title": "Example: Sorting",
        "excerpt":"Sorting vectors or lists Vectors can be sorted using the sort function. If you want to sort a list, you have to access the actual elements since sort requires atomic vectors. x &lt;- c(7,5,8,2,10) sort(x) ## [1] 2 5 7 8 10 l &lt;- list(x) sort(l[[1]]) ## [1] 2 5...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-15_sorting.html",
        "teaser":null},{
        "title": "Example: Cleaning Columns",
        "excerpt":"Cleaning data frames involves quite different aspects like splitting cell entries, converting data types or the conversion of “wide” to “long” format. In general, the aim is to come up with a data frame, that has Wickham 2014: a separate column for each variable (which has exactly one kind of...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-16_cleaning.html",
        "teaser":null},{
        "title": "Example: Merging",
        "excerpt":"When thinking about combining two data frames one has to distinguish between merging them by the values given in a specific column or consecutively putting them together just rows after rows. For the following examples, we will use these two data frames. x &lt;- c(1, 2, 3, 4, 5) y...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-17_merging.html",
        "teaser":null},{
        "title": "Get prepared for SDM",
        "excerpt":"Slowly begin to get yourself familiar with some important references for the upcoming student presentations on different SDM techniques. Start with the excellent overviews by Robert J. Hijmans and Jane Elith on www.rspatial.org and by Damaris Zurell on damariszurell.github.io. Then continue with more specific literature like, e.g. A practical guide...","categories": ["02 More basics"],
        "tags": ["Unit","02"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit02/unit02-18_get_prepared.html",
        "teaser":null},{
        "title": "Spatial Data",
        "excerpt":"Get a brute-force introduction to working with different kinds of spatial data in R. Learning objectives At the end of this unit you should be able to distinguish between raster and vector data, know the basics for using coordinate reference systems in R, know how to read in and write...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-01_spatial_data.html",
        "teaser":null},{
        "title": "Vector Data",
        "excerpt":"Vector data consists of potentially linked points defined by coordinates that can form complex geometries with assigned attributes. Vector data model In a Cartesian coordinate system, which is necessary for the representation of a Euclidean geometry, arbitrarily complex spatial structures for the modelling of geoobjects can be constructed starting from...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-02_vector_data.html",
        "teaser":null},{
        "title": "Raster Data",
        "excerpt":"Raster data consists of cells or pixels in a seamless grid system and usually contain only one value per cell or pixel. Raster data model Raster data is commonly used to model spatially continuous data such as environmental temperature or elevation. In contrast to the vector data model, in the...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-03_raster_data.html",
        "teaser":null},{
        "title": "Coordinate Reference Systems",
        "excerpt":"An integral part of all spatial data is the coordinate reference system (CRS), which is used to define meaningful distances between data points irrespective of their values. Distances become meaningful as soon as the origin of a particular reference system and its units are known. The origin of a CRS...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-04_CRS.html",
        "teaser":null},{
        "title": "Example: Workflow in R",
        "excerpt":"This example provides a schematic workflow for processing vector and raster data in R. Get raster data Firstly, we import some raster data into our working environment Therefore, we need to load a package to handle raster data in R, preferable raster. If the package is not available, we need...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-05_example_SpatialDataProcessing.html",
        "teaser":null},{
        "title": "Exercise: Spatial Data Processing",
        "excerpt":"This exercise will lead you through some of the most basic and important steps for spatial data processing. Things you need for this worksheet R — the interpreter can be installed on any operation system. RStudio — we recommend to use R Studio for (interactive) programming with R. Git environment...","categories": ["03 Working with spatial data"],
        "tags": ["Unit","03"],
        "url": "http://localhost:4000/moer-bsc-project-seminar-SDM/unit03/unit03-06_exercise_SpatialDataProcessing.html",
        "teaser":null},]
