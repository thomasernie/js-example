-- create query for branchStudent table

create table branchStudent(
Id int,
branchId int,
studentId int,
PRIMARY KEY(Id)
);

-- Insert query for multiple rows

INSERT INTO branchStudent(Id,branchId,studentId) VALUES(1,1,1),(2,2,2),(3,2,1),(4,1,3)

-- create query for branch table

create table branch(
id int,
name text
)

-- Insert query for multiple rows

insert into branch(id,name)values(1,'CSE'),(2,'IT')

-- create query for student table

create table student(
id int,
name text
)

-- Insert query for multiple rows

insert into student(id,name)values(1,'Jay'),(2,'Sanjay'),(3,'Rajesh')

-- Altering to make foreign keys
-- Branch table's id is foreignkey for column branchId in branchStudent table

ALTER TABLE branchstudent
ADD FOREIGN KEY (branchid) REFERENCES branch(id);

-- Student table's id is foreignkey for column studentId in branchStudent table

ALTER TABLE branchstudent
ADD FOREIGN KEY (studentid) REFERENCES student(id);