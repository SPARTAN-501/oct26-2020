# W05D05 - Mid-term Project Kickoff

### Outcomes
* work on a team
* put all your skills together/practice
* practice building something
* little less hand-holding

### Pick a Project

### User Story
* Describes how a user will interact with your app

* As a _____, I can ______, because _____
* As a user, I can see a list of available maps, because I want to see things of interest in my area
* As a user, I can see a menu for a local restaurant, because I am hungry

* As a logged-in user, I can edit a map, because I want to add more POI
* As a non-logged-in user, I cannot edit maps, because they don't belong to me

* As a logged-in user, I can favourite a map for later, because I want to view it again AND the heart icon turns red

### User Stories give us nouns
* nouns become your entities/tables
* leads to your ERD

### Routes
* RESTful routes to interact with our resources
* BREAD/CRUD operations on each table


* REpresentational State Transfer
* Routes represent the underlying resources

// without PUT/PATCH
Browse  GET /dinosaurs
Read    GET /dinosaurs/:id
Edit    POST /dinosaurs/:id
Add     POST /dinosaurs
Delete  POST /dinosaurs/:id/delete

// with PUT/PATCH
Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

app.patch('/dinosaurs/:id', () => {});

GET /users/:user_id/tweets/:tweet_id/comments
GET /maps/:id/pins

GET /all-the-dinos
POST /create-a-new-dino

### SPA vs Multi-page
* not mutually exclusive
* choice is up to you/team

### MVP
* Most Valuable Primate
* Minimum Viable Product
* Minimum Viable Demo (MVD)
* If you don't demo it, don't build it

requirements => user stories => ERD => routes

### UI/Mockups/Wireframes
* window into our data

### User Login
* don't do it
* seriously don't

```js
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
* BE === Node/Express/Postgres
* FE === HTML, CSS, JS, jQuery, CSS Grid, Flexbox, Bootstrap

### The Skeleton

### Git
* Merge conflicts
* Use best practices: branches, commit regularly
* merge locally or merge in the cloud (Pull Requests)

git pull origin master/main
git pull
git push origin my-branch
git pom

1. pull latest master
2. checkout your branch
3. work on your branch committing frequently
4. push regularly
5. merge locally/merge in the cloud (PR)
6. pull latest master

### DO NOT CODE ON MASTER/MAIN

`git branch`

### Splitting Up The Work
* Horizontally - everyone working on the same layer
* Vertically - one on FE and one on BE
* Pair Programming

### Communication

### Github Projects
* kanban board trello

### Deployment
* up to you and your team
* Heroku or Digital Ocean





# 
