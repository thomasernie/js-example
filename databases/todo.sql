CREATE TABLE logistics_Company(
    user_id int PRIMARY KEY,
    category_id int,
    user_name varchar, 
    task varchar,
    status varchar
  );

  INSERT INTO logistics_Company(user_id,category_id,user_name,task,status)
      VALUES (1,1,'Vasanth', 'Need to achieve 800 orders','in-progress'), 
             (2,2,'Jay','Train 5 interns',' in-progress'),
             (3,3,'Satish','Get trained in devops','in-progress');

SELECT *FROM logistics_Company;

CREATE TABLE todo_Category(
     user_id int PRIMARY KEY,
     category_id int ,
     category_name varchar,
     due_date varchar,
     FOREIGN KEY (category_id)REFERENCES logistics_Company(user_id)
    ); 

INSERT INTO todo_Category(user_id,category_id,category_name,due_date)
      VALUES (1,1,'operations','31/09/2021'), 
             (2,2,'IT','31/09/2021'),
             (3,3,'IT','31/09/2021');
 
 SELECT *FROM todo_Category;

 --full join // Returns all records when there is a match in either left or right table  

SELECT  logistics_Company.user_id, todo_Category.category_id, logistics_Company.user_name, logistics_Company.task,
todo_Category.category_name ,logistics_Company.status,todo_Category.due_date
FROM todo_Category
FULL OUTER JOIN logistics_Company ON todo_Category.category_id=logistics_Company.user_id
ORDER BY todo_Category.category_id;