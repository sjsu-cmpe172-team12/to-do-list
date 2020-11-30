# **Note:**

To avoid getting charged by AWS, we've shut down our deployments and RDS. Please refer to the demo video and our reports for the project details.

# **San Jose State University**

## **Course:** Enterprise Software - CMPE172 / FALL 2020

**Instructor:** Professor Babu Thomas <br />
**Team Name:** Todolist - team 12 <br />
**Team Members:**

- Duy Le
- Anh Phan
- Nhi Truong

# App Demo Screenshot
<img src="https://user-images.githubusercontent.com/28032881/100589723-52348400-32a8-11eb-95ad-4962c1c5bbf9.png" width=900>

# Project Introduction
In order to manage team projects and tasks most effectively, having a ToDoList application is a need. First, our ToDoList will help to hit their goals without scramble. It maps out steps and organizes all the details of works in one place. Second, a ToDoList helps to see where everything stands such as visualize work clearly and move work through multiple stages quickly. Third, ToDoList is a great access to hit deadlines thanks to creating a plan that shows you how the pieces of your project fit together, and helps you keep work on track as things change. Fourth, ToDoList nails your timing by viewing work on a calendar. It helps to spot holes and overlaps in your schedule and quickly make adjustments. Last but not least, ToDoList will save us so much time from manually writing down tasks or consistently remembering upcoming works because it stores tasks and automatically reminds us.

## Application URL

 http://54.193.127.148:3000

## App Setup

1. Node JS Runtime Environment
2. VSCode for UI and Eclipse IDE for backend API
3. Java 11 + Maven
4. MySQL Workbench

## How To Run The Program Locally:

Clone the project using git clone

### Server
1. `cd` to the project directory.
2. `cd` to '/backend'
3. Have your database ready
4. Right Click and choose 'Run As > Spring Boot App'

### Database
Since our AWS RDS and deployments have been shutdown to avoid charges, our backend will not run with the current setup. To run the app locally, please create a MySQL DB instance and connect it to the backend by updating file 'src/main/resources/application.properties' with your credentials

```
spring.datasource.url=
spring.datasource.username=
spring.datasource.password=
```

### Client
1. Open up a terminal and change directory (`cd`) to the project directory
2. `cd` to 'to-do-list/backend/frontend'
3. Run `npm install` to install node_modules
4. Run `npm run start` to start client server on localhost:3000


## Project Documentation

### System Diagram

![System Diagram](documentation/System%20Diagram.png)

### Database ERD

![Database ERD](documentation/ERD.png)

### Database Schemas

users(user_id, email, password_hash, username, creation_date) <br/>
todolists(todo_list_id, user_id, title, description, status, creation_date, modification_date) <br/>
todolistentries(entry_id, todo_list_id, title, description, status)

**NOTE:** The SQL queries to create these tables are included in server/database/schemas.sql as well as some dummy data.



## Project Documents (Google Docs):

