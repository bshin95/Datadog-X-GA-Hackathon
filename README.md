# PawPrint

###### Created by the Wizards for the DataDog x General Assembly Hackathon

---

### Description

This application is a social media application that allows internal employees to share more details about themselves with their co-workers. This application also doubles as an internal directory allowing employees to cover all of their immediate needs for gaining insight on news, new hires, HR updates, development in progress, and current events happening via a chat feature.
The software engineers settled on using the MERN stack to allow for scaleability since this would be an application available for use for many companies. The schemaless nature of this database also allows for easier updates in the future if more features need to be added.
For security reasons, we are utilizing bcrypt and JWT tokens.
Link to deployed site: `TBD`

##### MVP

For MVP, we setup the application to allow users to be created via a registration page by using `/register`. The MVP is setup with one large schema for users to enter all of their information to include fun facts about themselves.
The user can move through the application via the navigation bar to search and to reach their profile update page.
The user can click on the search link to then get to a page showing all users. The user can search for a specific employee on the same page to narrow down the list.
The user can then click on the found profile to show contact information and department of the user. The user can then click on the profile again to then get the social media page.

##### Post-MVP

For the post MVP, we would break up the user schema into HR held data which would sit in one table (document) and another that is for fun facts. This would assist with separation of concerns. The HR data would technically come from an api call from an HR database. The user would be given their email and preset password upon being hired and have the ability to add in optional data.
For the weather, we would drill down into only seeing the weather for the current day. The api is up and running, but it is a 5day forecast rather than just the current weather. We would add a conditional formatting to give images of weather as well.
For the home page, we would add in the search box as intended by the wireframes provided by the UX team.
The chat feature would also be flushed through to pull the current users chatting.
Overall refactorying the code to align our styles, cleaning up the commented out code and getting back to the functionality intended would be the goal of the post-MVP.

---

### Wireframes

6 Screens Wireframe: https://drive.google.com/open?id=1G_BdCEua10RqqIWwfskoBiNXaJVlA-QL
![ERD](https://app.lucidchart.com/invitations/accept/9d3e3afc-e07f-46a6-8423-1877a4c1590a)

#

### Component heirarchy

![ERD](https://github.com/ReginaClarke/Instashop/blob/master/Media/Component%20Hierarchy.jpeg)

#

### Entity Relationship Diagram

`https://app.lucidchart.com/invitations/accept/9d3e3afc-e07f-46a6-8423-1877a4c1590a`
![ERD](https://github.com/ReginaClarke/Instashop/blob/master/Media/Entity%20Relationship%20Diagram%20-%20Instashop.png)

#

### Installation instructions

- NPM i in both the frontend and backend folder to ensure all packages are installed as they will be needed to function
- Deployment instructions: this application will be deployed on Surge for the frontend and Heroku for the backend
