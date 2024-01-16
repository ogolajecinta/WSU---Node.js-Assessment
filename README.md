# WSU-Node.js-Assessment

## SECTION 1: Node.js
## Task 1: Setup
1. Initiate a Node.js project.
2. Create an Express.js server that runs on port 3000 in an app.js file.
3. Verify that the project runs successfully by starting the server.
## Task 2: API Development
1. Open the app.js file and create a new endpoint /api/health that returns a JSON response
with the message "Server is healthy."
2. Implement a basic middleware that logs the timestamp and the requested endpoint for
each incoming request.

## SECTION 2: MongoDB
Task 1: Database Configuration
1. Connect the Node.js application to a MongoDB database. You can use a local instance for
this assessment.
2. Modify the existing code to include Mongoose or an appropriate MongoDB driver to
interact with the database.
Task 2: Data Model
1. Create a new MongoDB schema for a "User" with the following fields: firstName, lastName
and email.
2. Implement API endpoints to perform CRUD operations on the "User" collection (GET all,
GET by ID, POST, PUT, DELETE).
