---
templateKey: 'product-page'
path: /products
title: Quick Sorting w/ Clean Data
image: /img/fullscreen.png
heading: How did I build this?
description: >-
  I liked the sound of the Jamstack architecture (modern JavaScript working with text files as the data layer) so I adapted a Gatsby blog starter into this 'encyclopedia app' in order to become familiar with Jamstack (and Netlify, for continuous deployment).
  
  The dataset comes from a spreadsheet of character data for the game Fantasy War Tactics R (by VALOFE, see About for more). I tinkered around with an old Python scraping script until it no longer crawled a webpage but a CSV file, and then I set it to output a separate file for each record-- just like the GraphQL-powered Jamstack framework requires.
intro:
  blurbs:
    - image: /img/diagram01.png
      text: >
        A spreadsheet saved to Comma Separated Values (CSV) format starts off our mock database.
    - image: /img/diagram02.png
      text: >
        Python script cleans the CSV data, formatting into Markdown syntax item by item and creating a file (*.md) for the data on each line.
    - image: /img/diagram03.png
      text: >
        Jamstack renders md files as a relational database thanks to the magic of GraphQL, which functions as a data schema even though we're not running a database-- the markdown are static text files, and don't require a database server.
    - image: /img/diagram04.png
      text: >
        Gatsby optimizes the app's code for fastest loading on mobile and delivers the optimized build to the Netlify CD platform. The app functions the same on any device with a web browser, and mimics having a relational database even though it is a bunch of static files crafted into a PWA.
  heading: Jamstack verdict
  description: >
    Easy to pick up and run with, text files in Markdown syntax make for a great data model. Using static files in this way saves on website hosting expenses, because no database servers are needed.
main:
  heading: Why did I build this?
  description: >
    Learning new techniques brings good times. I'm a front-end developer who likes to keep learning and has heard great things lately about GraphQL, Gatsby and Netlify, so this project has helped me learn some core skills in these new techs. This dataset was also used in an old project when I was learning Angular2, so seeing Jamstack build it in a very different way is super neat.
  image1:
    alt: A close-up of a paper filter filled with ground coffee
    image: /img/products-grid3.jpg
  image2:
    alt: A green cup of a coffee on a wooden table
    image: /img/products-grid2.jpg
  image3:
    alt: Coffee beans
    image: /img/products-grid1.jpg
testimonials:
  - author: M Brown
    quote: >-
      Metadata is just what it sounds like-- data about data.
full_image: /img/opensource_jam.png
pricing:
  heading: Jamstack ingredients
  description: >-
    React is a JS library, Gatsby uses React & GraphQL. A Python script was crafted to convert the spreadsheet into multiple, Markdown-format text files; these are hosted dynamically on a Github codebase via the Netlify delivery network.
  plans:
    - description: Progressive tooling & optimizing of React applications
      items:
        - assure compatability across all browsers
        - get a mobile experience or a desktop experience
        - pre-build images for many device sizes
      plan: React with Gatsby tooling
      price: 'Gatsby'
    - description: In-step code deployment to a global delivery network
      items:
        - app updates production code on Github pushes
        - CDN fine-tuned for speedy access
        - site encryption & other hosting quality of life built-in
      plan: Continuous Deployment
      price: 'Netlify'
    - description: A data layer that's simple to read and easy to support
      items:
        - human-readable syntax
        - lives on Github, not bundled inside codebase
        - scripting can automate data updates 
      plan: Transparent Data layer
      price: 'Markdown'
---
