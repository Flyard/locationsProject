## ⚠️ Work still in progress - Last update: 09/02/23
Known issues: 
- Getting alert "User already exists" on Register. This message is displayed even though your user was actually created.
- Not getting any error when trying to Edit a location as a `user`, but still getting a 401 (Not Authorized)

## 📚 Description
---
**LocationsProject** is a web application made to display information about movies that were shot in Paris. It uses an API on Express / NodeJS for the backend, and VueJs/CSS for the frontend.
To get access to the locations, you must be logged in, so you must create an account if you don't have one.

There are 2 roles: **user** and **admin**  
- **User**: it is the default role when signing up. You can only display and read details about the selected locations.
- Admin: You have the same priviledges as user, but you can Create, Read, Update and Delete locations. 

## 🔗 Link to website
---
https://location-project.vercel.app/
