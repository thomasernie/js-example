CREATE Table todo_list(    
  task_id int,
  task_performed varchar,
  category varchar,
  PRIMARY KEY (person_name)
);

CREATE Table performance(    
  status_id int,
  status varchar,
  due_date date,
  PRIMARY KEY (person_name)
);
CREATE TABLE freight(
  person_id int,
  person_name varchar,
  task_id varchar,
  status_id varchar,
  PRIMARY KEY (person_id),
  FOREIGN KEY (task_id) REFERENCES todo_list(task_id),
  FOREIGN KEY (status_id) REFERENCES performance(status_id)
)   

INSERT INTO todo_list(person_name,task_performed,category)
VALUES ('Vasanth','Need to achieve 800 orders','Operations')
INSERT INTO todo_list(person_name,task_performed,category)
VALUES ('Jay','Train 5 interns','IT')
INSERT INTO todo_list(person_name,task_performed,category)
VALUES ('Satish','Get trained in devops','IT')

INSERT INTO performance(person_name,status,due_date)
VALUES ('Vasanth','in-progress','sep 31st 21')
INSERT INTO performance(person_name,status,due_date)
VALUES ('Jay','in-progress','sep 31st 21')
INSERT INTO performance(person_name,status,due_date)
VALUES ('Satish','in-progress','sep 31st 21')

INSERT INTO freight(person_id,person_name,task_id,status_id)
VALUES (1,'Vasanth',1,4)
INSERT INTO freight(person_id,person_name,task_id,status_id)
VALUES (2,'Jay',2,5)
INSERT INTO freight(person_id,person_name,task_id,status_id)
VALUES (3,'Satish',3,6)

SELECT branch_Student.id,branch_Student.branch_id,branch.branch_name,
branch_Student.student_id,student.student_name
FROM branch_Student
INNER JOIN branch ON branch.id=branch_Student.branch_id
INNER JOIN student ON student.id=branch_Student.student_id
ORDER BY branch_Student.id;

SELECT freight.person_name,todo_list.task_performed,
todo_list.category,performance.status,performance.due_date
FROM freight
FULL OUTER JOIN todo_list ON todo_list.task_id = freight.task_id
FULL OUTER JOIN performance ON performance.status_id = freight.status_id


SELECT freight.person_name,todo_list.task_performed,
todo_list.category,performance.status,performance.due_date
FROM freight
INNER JOIN todo_list ON todo_list.task_id = freight.task_id
INNER JOIN performance ON performance.status_id = freight.status_id





