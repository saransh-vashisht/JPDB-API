
# Student Enrollment Form

## Description

This is a web-based HTML form for student enrollment using JsonPowerDB as the database. JsonPowerDB is a real-time, high-performance, lightweight, and simple-to-use REST API-based multi-mode DBMS. It has ready-to-use APIs for JSON document DB, RDBMS, key-value DB, geospatial DB, and time series DB functionality. JPDB supports and advocates for true serverless and pluggable API development.

This project allows users to perform CRUD operations on student enrollment data. CRUD stands for create, read, update, and delete. Users can create new student records, read existing records, update records, and delete records.

This project is useful for educational institutions that want to manage their student enrollment data in a more efficient and effective way. It can also be used for other purposes, such as online examination registration, job application, and profile creation.

## Benefits of Using JsonPowerDB

The benefits of using JsonPowerDB for this project include:

- Simplest way to retrieve data in a JSON format.
- Schema-free, simple to use, nimble, and in-memory database.
- Built on top of one of the fastest and real-time data indexing engines - PowerIndeX.
- Low level (raw) form of data and is also human readable.
- Helps developers in faster coding, in-turn reduces development cost.

## CRUD operations

- Create operation allows users to create new student records. This can be done by entering the student's name, address, phone number, and other relevant information into the form.

- Read operation allows users to view existing student records. This can be done by searching for the student's name, address, or other identifying information.

- Update operation allows users to modify existing student records. This can be done by entering the new information into the form and clicking the "Update" button.

- Delete operation allows users to remove existing student records. This can be done by selecting the student's name from the list and clicking the "Delete" button.

## Tech Stack Used 

- Front-end : HTML, CSS , JAVASCRIPT
- Database : JsonPowerDB

## Screenshots

![App Screenshot](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/Screenshot%202023-11-02%20072518.png)

![Database Screenshot](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/Screenshot%202023-11-02%20072900.png)

### Buttons

- UPDATE : when student roll number is already present in database then student information is fetched from database and filled in respective feild then user can UPDATE student information
- SAVE : If student roll number is not existed in database then we can fill other field and save in database
- RESET : By this we can clear all field of form and with this except first field (roll-no) other field are disabled until user enter any roll number

# HOW TO USE

- Initially

![1](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/1.png)

- We need to enter a roll number

- If roll number is not valid

![2](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/2.png)

- If roll number is valid and that roll number is existnig in database

![3](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/3.png)

Fetching student data using roll number If student already present in database, then all field filled with that student information

- otherwise, other fields are enabled after user input roll number

![4](https://github.com/saransh-vashisht/JPDB-API/blob/main/images/4.png)

# Installation

Make a folder in your system and clone the project using git bash then open the project in Visual Studio Code or any IDE you prefer.

## Clone the project

```
https://github.com/saransh-vashisht/JPDB-API

```

### After Cloning

Move to  script.js file replace the connectionToken by with your Connection Token.

# Sources

- Introduction to JsonPowerDB - V2.0 course on https://careers.login2explore.com/
- Bootstrap







