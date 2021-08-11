
-- Create
CREATE Table person(
  id int,
  name varchar,
  PRIMARY KEY(id)
)

CREATE Table todo(    
  id int,
  person_id int,
  priority_id int,
  category_id int,
  status_id int,
  description varchar ,
  due_date date,
  PRIMARY KEY (id),
  FOREIGN KEY (person_id) REFERENCES person(id),
  FOREIGN KEY (priority_id) REFERENCES priority(id),
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (status_id) REFERENCES status(id)
)    

CREATE Table category(
  id int,
  name varchar,
  PRIMARY KEY(id)
)
 
CREATE Table priority(
  id int,
  level varchar,
  PRIMARY KEY(id)
)

CREATE Table status(
  id int,
  name varchar,
  PRIMARY KEY(id)
)

--Insert
INSERT INTO person(id,name) 
VALUES
(1,'VASANTH')
(2,'JAY') 
(3,'SATISH')
(4,'Arjun')
(5,'kiruthika')
(6,'Dhanalaksmi')

INSERT INTO category(id,name) 
VALUES
(1,'Operations')
(2,'IT')


INSERT INTO priority(id,level) 
VALUES
(1,'High')
(2,'Medium')
(3,'Low')

INSERT INTO status(id,name) 
VALUES
(1,'Completed')
(2,'In-progress')
(3,'Not-Completed')
(4,'on-hold')

 INSERT INTO todo(id,person_id,priority_id,category_id,status_id,description,due_date)
 VALUES
(1,1,1,1,1,' Need to achieve 800 orders','2021-09-30')
(2,2,2,2,2,'Train 5 interns','2021-09-30')
(3,3,3,2,3,'Get trained in devops','2021-09-30')
(4,4,1,null,null,'Need to achieve all orders','2021-09-30')
 
ALTER TABLE todo
ADD customer_id int NULL

ALTER TABLE todo
ADD status_id int NULL

ALTER TABLE category
ADD id int NULL

ALTER TABLE status
ADD id int NULL

--Select 
-- INNER JOIN
SELECT person.id,person.name AS person_name,todo.id AS todo_id,todo.description,todo.priority_id,
priority.level,category.id AS category_id,category.name AS category_name,status.id AS status_id,status.name AS status_name
FROM todo
INNER JOIN person ON person.id = todo.person_id
INNER JOIN priority ON priority.id = todo.priority_id
INNER JOIN category ON category.id = todo.category_id
INNER JOIN status ON status.id = todo.status_id
ORDER BY person.id;

-- FULL OUTER JOIN 
SELECT person.id,person.name AS person_name,todo.id AS todo_id,todo.description,todo.priority_id,
priority.level,category.id AS category_id,category.name AS category_name,status.id AS status_id,status.name AS status_name
FROM todo
FULL OUTER JOIN person ON person.id = todo.person_id
FULL OUTER JOIN priority ON priority.id = todo.priority_id
FULL OUTER JOIN category ON category.id = todo.category_id
FULL OUTER JOIN status ON status.id = todo.status_id
ORDER BY person.id;

-- RIGHT JOIN
SELECT person.id,person.name AS person_name,todo.id AS todo_id,todo.description,todo.priority_id,
priority.level,category.id AS category_id,category.name AS category_name,status.id AS status_id,status.name AS status_name
FROM todo
RIGHT JOIN person ON person.id = todo.person_id
RIGHT JOIN priority ON priority.id = todo.priority_id
RIGHT JOIN category ON category.id = todo.category_id
RIGHT JOIN status ON status.id = todo.status_id
ORDER BY person.id;

--LEFT JOIN
SELECT person.id,person.name AS person_name,todo.id AS todo_id,todo.description,todo.priority_id,
priority.level,category.id AS category_id,category.name AS category_name,status.id AS status_id,status.name AS status_name
FROM todo
LEFT JOIN person ON person.id = todo.person_id
LEFT JOIN priority ON priority.id = todo.priority_id
LEFT JOIN category ON category.id = todo.category_id
LEFT JOIN status ON status.id = todo.status_id
ORDER BY person.id;





