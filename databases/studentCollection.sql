     CREATE TABLE branch(
     id int PRIMARY KEY,
    name varchar(20)
     );
     
     DROP TABLE branch;
    INSERT INTO branch(id,name)
    VALUES (1,'CSE');
    INSERT INTO branch(id,name)
    VALUES( 2,'IT');

    CREATE TABLE student(
    id int PRIMARY KEY,
    name varchar(20)
    ); 
    
    INSERT INTO student(id,name) 
    VALUES ( 1, 'Jay' ),( 2, 'Sanjay' ),( 3, 'Rajesh' );
    
    CREATE TABLE branchStudent(
    id int NOT NULL,
    branch_id int,
    student_id int,
    PRIMARY KEY(id),
    FOREIGN KEY (branch_id) REFERENCES branch(id),
    FOREIGN KEY (branch_id) REFERENCES student(id)
    
    );
    INSERT INTO branchStudent(id,branch_id,student_id)
    VALUES (1, 1, 1 ),(2, 2, 2 ),( 3, 2, 1) ,( 4, 1,3);
    
    
    SELECT * FROM branchStudent;
-   SELECT * FROM branch;
    SELECT * FROM student;
    -- inner join//for join table
--     SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
-- FROM ((Orders
-- INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
-- INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);

    SELECT branchStudent.id,branchStudent.branch_id,branch.name,branchStudent.student_id,student.name
    FROM ((branchStudent
    INNER JOIN branch ON branch.id = branch_id)
    INNER JOIN student ON student.id = student_id)
