# ** NOTE:**

To avoid getting charged by AWS, we've shut down our deployments and RDS. Please refer to the demo video and our reports for the project details.

# **San Jose State University**

## **Course:** Enterprise Software - CMPE172 / SPRING 2020

**Instructor:** Professor Babu Thomas <br />
**Team Name:** Todolist - team 12 <br />
**Team Members:**

- Duy Le
- My Anh
- Nhi Nguyen

# Project Introduction
In order to manage team projects and tasks most effectively, having a ToDoList application is a need. First, our ToDoList will help to hit their goals without scramble. It maps out steps and organizes all the details of works in one place. Second, a ToDoList helps to see where everything stands such as visualize work clearly and move work through multiple stages quickly. Third, ToDoList is a great access to hit deadlines thanks to creating a plan that shows you how the pieces of your project fit together, and helps you keep work on track as things change. Fourth, ToDoList nails your timing by viewing work on a calendar. It helps to spot holes and overlaps in your schedule and quickly make adjustments. Last but not least, ToDoList will save us so much time from manually writing down tasks or consistently remembering upcoming works because it stores tasks and automatically reminds us.

## Application URL

 http://54.193.127.148:3000

## App Setup

1. NodeJS Runtime Environment
2. Java 11
3. Maven

## How To Run The Program Locally:


### Client

1. Open up a terminal and change directory (`cd`) to the project directory
2. `cd` to 'client'
3. Type `npm install` to install frontend dependencies
4. Type `npm run start` to start client server

### Server

1. `cd` to the project directory.
2. `cd` to server.
3. Build and run the maven project: `mvn spring-boot:run`
4. If backend fails to run due to failed MySQL connection, read note below:

**IMPORTANT NOTE:** Since we've closed our deployments, our RDS is no longer active and so the backend will not run. To run locally, you need to uncomment some lines in the server/src/main/resources/application.properties to connect to your local MySQL instance using your credentials

The database schemas & dummy data is included in server/database folder

```
    spring.datasource.url=jdbc:mysql://localhost:3306/todo?useLegacyDatetimeCode=false&serverTimezone=America/Los_Angeles

    spring.datasource.username=<YOUR MYSQL INSTANCE USERNAME>

    spring.datasource.password=<YOUR MYSQL INSTANCE PASSWORD>
```

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

