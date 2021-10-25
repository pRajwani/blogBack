
​
# TatvaSoft Angular Practical
​
This project is for test task submission.
This repo contains backend of the blog app.
​
​
## Run Locally
​
Clone the project
​
```bash
  git clone https://link-to-project
```
​
Go to the project directory
​
```bash
  cd my-project
```
​
Install dependencies
​
```bash
  npm install
```
​
Start the server
​
```bash
  npm run start
```
​
  
## API Reference
​
#### Login
​
```http
  POST /users/login
```
​
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your email key |
| `password` | `string` | **Required**. Your password key |
​
#### Signup
​
```http
  POST /users/signup
```
​
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstname`  | `string` | **Required**. First name of user |
| `lastname`   | `string` | **Required**. Last name of user |
| `email`      | `string` | **Required**. Email of user |
| `password`   | `string` | **Required**. Password of user |
| `dob`        | `string` | **Required**. Date of birth of user |
| `role`       | `string` | Role of user (Optional) |
​
#### Get Blogs
```http
  GET /blogs
```
​
​
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Access Token`  | `Authorization header` | **Required**. Bearer type access token in Authorization header  |
​
​
​
#### Create Blog
```http
  POST /blogs
```
​
​
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Required**. Title of blog |
| `description`      | `string` | **Required**. Description of blog |
| `Access Token`        | `Authorization header` | **Required**. Bearer type access token in Authorization header |
| `status`   | `string` | Status of blog (Optional) |
​
  
