FROM openjdk:8
EXPOSE 8080
ADD target/backend-0.0.1-SNAPSHOT.jar todo-backend.jar
ENTRYPOINT ["java","-jar","/todo-backend.jar"]