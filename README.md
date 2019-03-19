
# General Assembly Project 3: City Spot

Bete Yemane | Josh King | Lauren Bell | Alessandro Lepri

## Project Brief

The brief was to build a MERN stack application in a group where it was also a requirement to have automated tests for at least one RESTful resource on the back-end. 

### Timeframe

7 Days

## Technologies Used
* React
* JavaScript(ES6)
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

## Deployed Web App

---> https://city-spot.herokuapp.com/

## Our Application - City Spot

![Screenshot 2019-03-16 at 12 34 52](https://user-images.githubusercontent.com/44004811/54475500-d18ad700-47e9-11e9-8997-b206c1586b30.png)

## Project Summary

City Spot is a social platform for travellers to showcase their recent trips. This is done by generating a 'post' on a city's show page, which includes:

* an uploaded image
* a brief summary of their experience/caption relating to their image

To increase interactivity amongst the travellers, users can also:

* add a comment to the post
* 'like' the post

10 Posts with highest amounts of likes in the database will be featured on a popular posts page, where they are ordered with the descending likes. The number of 'likes' are shown on the post to visually display this popularity ranking on the page. The users are also able to 'like' the posts they see on that page, and will be navigated to the city's show page if they click on the post.

As well as the posts, the city show pages also include:

 * general city information such as population and region
 * event and restaurant recommendations
 * a youtube video of the city
 * and a weekly weather forcast
 
 This was a tool for user to find out information on cities they're planning to go to in the future.

## Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: a search bar, and links to each continent where they can select a city. 

![Screenshot 2019-03-16 at 12 34 27](https://user-images.githubusercontent.com/44004811/54475406-e7e46300-47e8-11e9-87c3-6099e41a5c8e.png)

City show page

![Screenshot 2019-03-17 at 23 09 08](https://user-images.githubusercontent.com/44004811/54499448-e2cb0500-4909-11e9-8dc5-2b7fc1ecb0b2.png)

A post

![Screenshot 2019-03-17 at 23 09 24](https://user-images.githubusercontent.com/44004811/54499450-f2e2e480-4909-11e9-9f91-047a2cf6e611.png)

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.

## Process

### Development
Planning was an integral part the process as our focus was to produce a backend API which could corehently work in the React front-end. We first began creating wireframes to work out this structure and general content placement of the website. It was clear our application would revolve around three elements: User, City and Continent and we established early on that posts will be added to a city's page by a user.

### Backend

We firstly began to develop our backend API using Mongoose, and created three of our main models; City, Continent, and User. It was set up so that cities will not exits before the continent was created, which meant the cities will become a virtual schema.

```
continentSchema.virtual('cities', {
  ref: 'City',
  localField: '_id',
  foreignField: 'continent'
})
```

We were then able to test our routes making adjustments needed to populate the accurate information we wanted to display, using Insomnia as our client. We then created a seeds file and added the data for both Continent and City to kick-start our database. 

#### Authentication

Users are required to register and login if they intend to create a post, like, and comment on a post. 

In order to carry out the authentication process, we used BCrypt to hash passwords in the backend and store it in the database so that BCrypt could compare it against the password given when logging in. We also used JSON Web Token to embed JSON into an encrypted token. This was incorporated in our login and register controller and is sent to the client when the users successfully authenticate. 

Upon registering, we used Nodemailer to send an email to the users email which includes a link to verify the email they have registered with. The users are notified on the front-end by a flash message. 
To experiement with Nodemailer and BCrypt even further, we also added a reset password option for users who have forgotten their password. The link navigates to a route where they input a new password which is undergoes the same backend process as the initial password setup.

#### Error Handling



### Frontend
Frontend setup
* setting up components and pages
* setting up forms
* connecting API requests to the front end.

### Task Management and Communication

Being in a team of four, we decided the easiest way to divide the workload was to have two people build the front-end, and two people build the back-end. We held stand-ups every morning and communicated via Slack to update each other with our progress.

## Styling

We used Semantic UI as our CSS Framework which created a sleek and user friendly design. 

## Challenges and Wins
Challenges:
* email system

Wins:

One of the biggest wins was the team communication. We had a group Slack channel where every member was equally active. This really helped us manage Git as a team, as we all got into the habit of informing each other when we were pushing to the development branch. Any errors or conflicts during this process, we notified the group channel where we all worked together to resolve the issue.


## Future features

* Currently, the only way to add new Cities is via our seeds file, so an admin account to add the cities will be a useful feature to add.

* To follow the conventions of a social media platform, and for users to engage with each other to have a sense of community, I'd like to implement user messaging & friend requests.

* A search bar for the Continent and City pages to improve user navigation.

