
CREATE TABLE branches (
    ID int NOT NULL,
    name varchar(255) NOT NULL,
    
    PRIMARY KEY(ID)
);

CREATE TABLE students(
    ID int NOT NULL,
    name varchar(255) NOT NULL,
    
    PRIMARY KEY(ID)
)


CREATE TABLE studentDetails (
    ID int NOT NULL ,
    branchId int NOT NULL,
    studentId int NOT NULL,
    
    PRIMARY KEY(ID),
    FOREIGN KEY (branchId) REFERENCES branches(ID) ,
    FOREIGN KEY (studentId) REFERENCEs students(ID) 
);


INSERT INTO students
SELECT 1,'NITHISH'
UNION ALL
SELECT 2,'VIJAY'
UNION ALL
SELECT 3,'SATHISH'
UNION ALL 
SELECT 4,'NWAR'

INSERT INTO studentdetails
SELECT 1,1,1
UNION ALL
SELECT 2,2,2
UNION ALL
SELECT 3,2,1
UNION ALL
SELECT 4,1,3


INSERT INTO branches
SELECT 1,'IT'
UNION ALL
SELECT 2,'CSE'

SELECT studentdetails.ID,studentdetails.branchId,studentdetails.studentId,
        branches.name AS BranchName,students.name AS StudentName 

FROM   studentdetails

INNER JOIN branches 
ON studentdetails.branchId = branches.id

INNER JOIN students 
ON studentdetails.studentId = students.id;
