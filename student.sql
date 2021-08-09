create table branch_Student(
id int,
branch_Id int,
student_Id int,
primary key (id),
foreign key (branch_Id) references branch(id),
foreign key (student_Id) references student(id)
)

create table branch(
id int,
name varchar,
primary key (id)
)



create table student(
id int,
name varchar,
primary key (id)
)

-- inserting values:

-- branch
   
   INSERT INTO branch (id,name)
VALUES (1,'CSE');

    INSERT INTO branch (id,name)
VALUES (2,'IT');

-- student

     INSERT INTO student (id,name)
VALUES (1,'Jay');

      INSERT INTO student (id,name)
VALUES (2,'Sanjay');

       INSERT INTO student (id,name)
VALUES (3,'Rajesh')

-- branchStudent

     INSERT INTO branch_Student (id,branch_Id,student_Id)
VALUES (1,1,1)

      INSERT INTO branch_Student (id,branch_Id,student_Id)
VALUES (2,2,2)

       INSERT INTO branch_Student (id,branch_Id,student_Id)
VALUES (3,2,1)

        INSERT INTO branch_Student (id,branch_Id,student_Id)
VALUES (4,1,3)


-- selecting

SELECT studentId FROM branchStudent;

SELECT branch_Student.branch_Id, branch.name
FROM branch_Student
INNER JOIN branch ON branch_Student.branch_Id=branch.id;


select branch_Student.student_Id,student.name
from branch_Student
inner join student on branch_Student.student_Id=student.id

SELECT branch_Student.id,branch_Student.branch_Id,branch.name,branch_Student.student_Id,student.name
FROM ((branch_Student
INNER JOIN branch ON branch_Student.branch_Id=branch.id)
inner join student on branch_Student.student_Id=student.id)


-- adding null
SELECT branch_Student.id,branch_Student.branch_Id,branch_Student.student_Id,student.name,branch.name as branchname
FROM ((branch_Student
left join branch ON branch_Student.branch_Id=branch.id)
left join student on branch_Student.student_Id=student.id)

