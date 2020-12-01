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
![Screen Shot 2020-11-29 at 10 21 20 PM](https://user-images.githubusercontent.com/28032881/100694677-68901d80-3344-11eb-906e-18cf16e06a62.png)
![Screen Shot 2020-11-29 at 10 21 32 PM](https://user-images.githubusercontent.com/28032881/100694685-6b8b0e00-3344-11eb-9a77-cd7e44df25df.png)
![Screen Shot 2020-11-29 at 10 21 40 PM](https://user-images.githubusercontent.com/28032881/100694712-7a71c080-3344-11eb-90b2-f460670a3c13.png)
![Screen Shot 2020-11-29 at 10 22 19 PM](https://user-images.githubusercontent.com/28032881/100694732-83629200-3344-11eb-9400-f6772ee77cca.png)
![Screen Shot 2020-11-29 at 10 22 11 PM](https://user-images.githubusercontent.com/28032881/100694735-852c5580-3344-11eb-9b90-ed6c9a5111b8.png)


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

## Folder Structure

## Project Documentation
### System Diagram

<img width="649" alt="Screen Shot 2020-11-30 at 12 34 10 AM" src="https://user-images.githubusercontent.com/28032881/100694335-b35d6580-3343-11eb-8f5a-478c07905b6e.png">
In the system diagram, the todolist uses CSS3, HTML5 and JavaScript as a front-end. This was then linked to the middle-tier where we used the spring boot framework and Java. The entire application was then uploaded to a docker container and put on EC2 which was hosting our docker container. 

### Database ERD
![Screen Shot 2020-11-30 at 7 40 42 PM](https://user-images.githubusercontent.com/28032881/100694439-f28bb680-3343-11eb-8f81-c098550c015c.png)

### Class, Sequence and interaction diagrams
![Screen Shot 2020-11-30 at 7 42 18 PM](https://user-images.githubusercontent.com/28032881/100694563-31217100-3344-11eb-9588-365d93f1f3a0.png)
![Screen Shot 2020-11-30 at 7 42 52 PM](https://user-images.githubusercontent.com/28032881/100694594-40082380-3344-11eb-9794-1a69b27a6ff7.png)

