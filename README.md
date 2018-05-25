

## Project description

This project was made by graduate students from Codaisseur for Roos.nl as a final group assignment.

**The goal of the app is**

* Test if people are willing to upload their contracts through the Upload App with their halloroos.nl email account
* See if the information can be manually added to their account on Roos.nl if there are matching emails
* Gather information about the type of contracts people have.
* For the admin to be able to see the contract details of all users using the app

## Language and Tools

**Frontend:**

*React/Redux

*JSX

*Styling: CSS, Material-ui-next


**Backend:**

*Typescript

*TypeORM

*PostgreSQL


**How to:**

Install the dependencies:

* In each project directory run `yarn `

Run the front-end side of the app:

* In the ‘client’ and  the ’admin’ directories run `yarn start`

Run the back-end side of the app:

* Have a ‘DATABASE_URL' environment variable set
* Start the TypeScript compiler: `tsc -w`
* Connect to Postgres with TypeORM: `yarn start`

+### User routes
+
+|**URI**|**VERB**|**ACTION**|
+|---------------------|------------|--------------------------------------|
+| /home               | GET        | Home page of the app                 |
+| /Privacy            | POST       | Set privacy in user table            |
+| /contracts          | GET        | List all contracts added             |
+| /contracts/:image   | GET        | Show details of contract             |
+| /HowTo              |            | Explanation of how to take a picture |
+| /upload             | POST       | Add contract to your user profile    |
+| /advice             | Analytics  | Links to Roos website                |
+| /contact            | Analytics  | Links to Roos contact page           |
+| /profile            | GET        | Show profile information of user     |
+
+### Admin routes
+
+|**URI**|**VERB**|**ACTION**|
+|--------------------|---------|--------------------------------|
+| /users             | GET     | List all users                 |
+| /users/:id         | GET     | List all contracts from 1 user |
+| /users/:id/:image  | GET     | Show the picture of a contract |
+
+
+### Public routes
+
+|**URI**|**VERB**|**ACTION**|
+|-------------|---------|-----------------------------------|
+| /logout     | GET     | lougoutPage                       |
+| /login      | GET     | loginPage                         |
+| /signup     | GET     | signupPage                        |
