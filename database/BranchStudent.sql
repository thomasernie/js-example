CREATE TABLE branch(
        id int NOT NULL,
        branchName varchar NOT NULL,
        PRIMARY KEY (id)
);
CREATE TABLE student(
        id int NOT NULL,
        studentName varchar NOT NULL,
        PRIMARY KEY(id)
);
CREATE TABLE branchStudents(
    id int NOT NULL,
    branchId int,
    studentId int,
    branchName varchar,
    studentName varchar,
    PRIMARY KEY (id),
    FOREIGN KEY (branchid) REFERENCES branch(id),
    FOREIGN KEY (studentid) REFERENCES student(id)
);

INSERT INTO branch(id,branchName)
VALUES
(1,'CSE')
(2,'IT')

INSERT INTO student(id,studentName)
VALUES
(1,'JAY')
(2,'SANJAY')
(3,'RAJESH')

INSERT INTO branchStudents(id,branchId,studentId)
VALUES
(1,1,1)
(2,2,2)
(3,2,1)
(4,1,3)
(6,null,1)
(7,1,null)
(5,null,null)

SELECT branchStudents.id,branchStudents.branchId,branch.branchName,
branchStudents.studentId,student.studentName
FROM ((branchStudents
INNER JOIN branch ON branch.id = branchid)
INNER JOIN student ON student.id = studentid)

