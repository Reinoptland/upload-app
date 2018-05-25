# Upload App for Roos

This app is allowing Roos' users to upload/take pictures of their contracts and access them on the app. It's build using the standard `create-react-app` so the usual `yarn start` can be used.

The backend (server) of this project must be running for the app to function correctly.

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



