
CREATE DATABASE studentDetails
ON
CREATE TABLE branchStudents (
    iD int NOT NULL PRIMARY KEY,
    branchId int NOT NULL,
    studentId int NOT NULL,
    branchName varchar,
    studentName varchar

CREATE TABLE branch AS
SELECT id, branchName
FROM branchStudents;

CREATE TABLE student AS
SELECT id, studentName
FROM branchStudents;
);

INSERT INTO branchStudents([id],[branchId],[studentId])
VALUE
(1,1,1),
(2,2,2),
(3,2,1),
(4,1,3)

INSERT INTO branch(id,branchName)
VALUE
(1,'CSE'),
(2,'IT'),

INSERT INTO student(id,studentName)
VALUE
(1,'JAY'),
(2,'SANJAY'),
(3,'RAJESH')