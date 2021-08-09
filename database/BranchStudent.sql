CREATE TABLE branch(
        id int,
        branch_name char NOT NULL,
        PRIMARY KEY (id)
 );

CREATE TABLE student(
        id int,
        student_name char NOT NULL,
        PRIMARY KEY(id)
);

CREATE TABLE branch_Student(
    id int,
    branch_id int,
    student_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (branch_id) REFERENCES branch(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

INSERT INTO branch(id,branch_name)
VALUES
(1,'CSE')
(2,'IT')

INSERT INTO student(id,student_name)
VALUES
(1,'JAY')
(2,'SANJAY')
(3,'RAJESH')

INSERT INTO branch_Student(id,branch_id,student_id)
VALUES
(1,1,1)
(2,2,2)
 (3,2,1)
(4,1,3)
(5,null,null)
 (6,null,1)
(7,1,null)


SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,
branch_Student.student_id,student.student_name
FROM branch_Student
INNER JOIN branch ON branch.id=branch_Student.branch_id
INNER JOIN student ON student.id=branch_Student.student_id
ORDER BY branch_Student.id;

SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,
branch_Student.student_id,student.student_name
FROM branch_Student
LEFT JOIN branch ON branch.id=branch_Student.branch_id
LEFT JOIN student ON student.id=branch_Student.student_id
ORDER BY branch_Student.id;

SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,
branch_Student.student_id,student.student_name
FROM branch_Student
RIGHT JOIN branch ON branch.id=branch_Student.branch_id
RIGHT JOIN student ON student.id=branch_Student.student_id
ORDER BY branch_Student.id;

SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,
branch_Student.student_id,student.student_name
FROM branch_Student
FULL OUTER JOIN branch ON branch.id=branch_Student.branch_id
FULL OUTER JOIN student ON student.id=branch_Student.student_id
ORDER BY branch_Student.id;

