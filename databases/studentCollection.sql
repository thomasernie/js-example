
     CREATE TABLE branch(
     id int PRIMARY KEY,
     branch_name varchar(20)
     );
     
      INSERT INTO branch(id,branch_name)
      VALUES (1,'CSE'), (2,'IT');
       
      CREATE TABLE student(
      id int PRIMARY KEY,
      student_name varchar(20)
      ); 

    
    INSERT INTO student(id,student_name) 
    VALUES ( 1, 'Jay' ),( 2, 'Sanjay' ),( 3, 'Rajesh' );
    
      CREATE TABLE branch_Student(
      id int ,
      branch_Id int,
      student_Id int,
      PRIMARY KEY(id),
      FOREIGN KEY (branch_Id) REFERENCES branch(Id),
      FOREIGN KEY (branch_Id) REFERENCES student(Id)
      );

    INSERT INTO branch_Student(id,branch_Id,student_Id)
    VALUES (1, 1, 1 ),(2, 2, 2 ),( 3, 2, 1) ,( 4, 1,3),(5,null,null),(6,null,1),(7,1,null);
    
    
      SELECT * FROM branch;
     SELECT * FROM student;
    
      SELECT * FROM branch_Student;
    
    --inner join// Returns records that have matching values in both tables

    SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,branch_Student.student_id,student.student_name
    FROM branch_Student
    INNER JOIN branch ON branch.id =branch_Student.branch_id
    INNER JOIN student ON student.id = branch_Student.student_id
    
    --left join// Returns all records from the left table, and the matched records from the right table
    
  SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,branch_Student.student_id,student.student_name
    FROM branch_Student
    LEFT JOIN branch ON branch.id =branch_Student.branch_id
    LEFT JOIN student ON student.id = branch_Student.student_id

    -- right join // Returns all records from the right table, and the matched records from the left table

 SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,branch_Student.student_id,student.student_name
    FROM branch_Student
    RIGHT JOIN branch ON branch.id =branch_Student.branch_id
    RIGHT JOIN student ON student.id = branch_Student.student_id

        --full join// Returns all records when there is a match in either left or right table

    SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,branch_Student.student_id,student.student_name
      FROM branch_Student
      FULL OUTER JOIN branch ON branch.id =branch_Student.branch_id
      FULL OUTER JOIN student ON student.id = branch_Student.student_id
      ORDER BY branch_Student.id;
    
    
