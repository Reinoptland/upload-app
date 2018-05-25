

## Project description

This project was made by graduate students from Codaisseur for Roos.nl as a final group assignment.

**The goal of the app is**

* Test if people are willing to upload their contracts through the Upload App with their halloroos.nl email account
* See if the information can be manually added to their account on Roos.nl if there are matching emails
* Gather information about the type of contracts people have.

**How to:**

Install the dependencies:

* In each project directory run `yarn `

Run the front-end side of the app:

* In the ‘client’ and  the ’admin’ directories run `yarn start`

Run the back-end side of the app:

* Have a ‘DATABASE_URL' environment variable set
* Start the TypeScript compiler: `tsc -w`
* Connect to Postgres with TypeORM: `yarn start`

**API and Databese**

Our database containes three tables. Users, Admin and contracts. User is a table of the registred users. We keep e-mail and a hashed password.
Admin is a table that contains all the Admin that are allowed to see the contracts of all users. 
The contracts contains the type, the provider, the file NAME, and the user ID. The file is stored in a s3 cloud and can be viewed online with a temporary(60s) active link to see the picture. 

ADMIN and USERS have the same endpoints. a POST to sign up and a GET to connect. 

CONTRACTS have a GET contracts by user and a GET picture who gives you back and the picture with the temporary link to the image.


