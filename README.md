

## Project description

This project was made by graduate students from Codaisseur for Roos.nl as a final group assignment.

**The goal of the app is**

* Test if people are willing to upload their contracts through the Upload App with their halloroos.nl email account
* See if the information can be manually added to their account on Roos.nl if there are matching emails
* Gather information about the type of contracts people have.

### User routes

|**URI**|**VERB**|**ACTION**|
|---------------------|------------|--------------------------------------|
| /home               | GET        | Home page of the app                 |
| /Privacy            | POST       | Set privacy in user table            |
| /contracts          | GET        | List all contracts added             |
| /contracts/:image   | GET        | Show details of contract             |
| /HowTo              |            | Explanation of how to take a picture |
| /upload             | POST       | Add contract to your user profile    |
| /advice             | Analytics  | Links to Roos website                |
| /contact            | Analytics  | Links to Roos contact page           |
| /profile            | GET        | Show profile information of user     |

### Admin routes

|**URI**|**VERB**|**ACTION**|
|--------------------|---------|--------------------------------|
| /users             | GET     | List all users                 |
| /users/:id         | GET     | List all contracts from 1 user |
| /users/:id/:image  | GET     | Show the picture of a contract |


### Public routes

|**URI**|**VERB**|**ACTION**|
|-------------|---------|-----------------------------------|
| /logout     | GET     | lougoutPage                       |
| /login      | GET     | loginPage                         |
| /signup     | GET     | signupPage                        |
