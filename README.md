## ⚠️ Work still in progress - Last update: 08/02/23

## 📚 Description
---
**LocationsProject** is a web application made to display information about movies that were shot in Paris. It uses an API on Express / NodeJS for the backend, and VueJs/CSS for the frontend.
To get access to the locations, you must be logged in, so you must create an account if you don't have one.

There are 2 roles: **user** and **admin**  
- **User**: it is the default role when signing up. You can only display and read details about the selected locations.
- Admin: You have the same priviledges as user, but you can Create, Read, Update and Delete locations. 

## 🧑🏾‍💻 Installation
---
- Clone the project to your computer. 
```bash
git clone <my-repo>
```
- In the `LocationsProject` folder, you will find the backend of the app. To run it, first run:
```bash
npm install
```
It should install all the dependencies I used for the project.

### Running the Express server

Use the following: 
```bash
node index.js
```
### Running the webpage

Then, navigate inside the folder, using :
```bash
cd locationApp
```
And run the following command:
```bash
npm run dev
```

