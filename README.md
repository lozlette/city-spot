# project-3
WDI Project 3

# General Assembly Project 3: City Spot

## Project Brief

A group project to build a fullstack React application.

### Timeframe

7 Days

## Technologies Used
* React
* Javascript(ES6)
* Node.js
* MongoDB
* Express
* Webpack
* Mocha/Chai/Supertest
* Filestack
* Axios
* SCSS/CSS
* Babel
* Semantic UI
* HTML5
* Git/Github
* Heroku

# Project Summary

City Spot is a web application where users can sign up and post images from their travels. The users can navigate to the city they visited to share their adventures with other travellers.

## Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: the search bar where they can search for a city, or the links that takes them to each continent where they can select a city.

Once on a city's page, users can view information about that city, posts made by other users and a link to view event and restaurant recommendations.

Users can also like and comment on the posts made by other users. Posts with high amounts of likes will be added to the popular posts page and will be able to like the posts they see on that page.

If a user would like to add a post they will have to register and login, and if the user has forgotten their password they can request an email with the link to change their password.

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.

# Process

We first began creating wireframes to work out the structure of the website and to have an idea of content placement. From then, we were able to establish the endpoints, models and routes needed for our app and we began to develop our backend API. Using Mongoose, three models were created; City, Continent, and User, and the fields we wanted our schema's to contain was easy due to the planning. Then we did the controllers. Each route was tested using Insomnia as our client.

We then created a seeds file and added some data.
We did error handling as we went along.

------------------------------
-testing ALEX
-register and login ALEX
-external API requests LAUREN

Frontend setup

-setting up components and pages
-setting up forms
-connecting API requests to the front end.

## Task Management and Communication

Being in a team of four, we decided the easiest way to divide the workload was to have two people build the front-end, and two people build the back-end. We held stand-ups every morning and communicated via Slack to update each other with our progress.

## Styling

-semantic UI
-CSS

## Features

-likes
-comment
-posts
-email system
-view post by likes(popular post page)

## Challenges and Wins
Challenges:
-email system

Wins:

One of the biggest wins was the team communication. We had a group Slack channel where every member was equally active. This really helped us manage Git as a team, as we all got into the habit of informing each other when we were pushing to the development branch. Any errors or conflicts during this process, we notified the group channel where we all worked together to resolve the issues.

-likes
-planning
-bringing in the APIs.

## Future features

Currently, the only way to add new Cities is via our seeds file, so an admin account to add the cities will be a useful feature to add in the future.

User messaging & friend requests. To follow the conventions of a social media platform, and for users to engage with each other to have a sense of community.

-continent page with search bar
-weather icons on city page separate event and restaurant pages
