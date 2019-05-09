# OOTD Inspo App
Full-Stack Application for GA Unit 2 Project

Link to my project: https://ootd-app1.herokuapp.com/


## Description

OOTD Inspo app is a full-stack application that allows users to view fashion items and gain inspiration for their own personal style. A user has the ability to view products, photos, or styles uploaded by other users and post their own items. They can also edit anyone's post to add product information such as the brand, price, details, and a link to purchase the item. A user does not need to sign up for OOTD Inspo App to use it, however once a user joins they have access to save items to their own personal Collection. 

## Technologies Used

OOTD Inspo app was built using Node.js, Mongoose, Express, EJS, JavaScript, jQuery, and CSS. Animista was also used for CSS animations.

## Approach Taken

My inspiration for this app was a combination of fashion blogs, LikeToKnow.it and Pinterest. Many people can spend hours on Pinterest browsing pictures, but they usually don't go anywhere or give any information about what you're looking at. The LikeToKnow.it app allows you to follow Instagram Influencers or Fashion Bloggers who load links to what they wear. The OOTD Inspo app could provide a little of both. The access to browse pictures for inspiration and also the option to have users be able to link to the actual product so people can purchase. I knew I wanted the app to have a Fashion Blog feel, with a simple and sleek design, but similar to pinterest or Instagram where the pictures are the main attraction. I started by putting together two sets of seed data. One with complete product information, and a second set with only images and some details. I then started to create the routes. First the index, then the show, add, edit, and delete. Next I created a page to filter images or products by season to make it easier for the user to find what they are wanting inspiration for. 

Once all of the routes worked successfully I decided to add a sign up/log in functionality, with encrypted passwords & an authorization flow. I used jQuery to manipulate the dom with a modal instead of having a separate log in/sign up page. Once I had this in place I added another route to allow users to save products to a Collection page. I then moved on to styling. I decided against using a CSS Framework because I had an idea of what I wanted the app to look like and didn't think a framework would allow me the customization I was looking for. 

## Using OOTD Inspo App

The Index page of OOTD Inspo will display all images of posted fashion items. They are not categorized by anything. This gives a user the ability to browse everything the app has to offer if they want. The navigation gives a user the choice to switch to browse by season, add an item, or sign up/login. If a user choses to shop by season they will be taken to a separate page with items that have been tagged for each season. A user can add any item that inspires them or any item they want to purchase to OOTD Inspo app. The only key value that is required is the image, so additional details are not needed and are encouraged to be completed by other users if they have them. If someone choses to sign up for OOTD Inspo app, they are able to add items to their own personal collection. 

## Unsolved Problems

I did not have time to complete the Collection route. At this time no matter who is signed in anything that has been checked as collect will show up in the My Collections route. 
