
CREATE Table person(
  id int NOT NULL,
  name varchar,
  PRIMARY KEY(id)
)

CREATE Table todo(    
  id int,           
  person_id int,
  description varchar,
  priority_id int,
  category_id int,
  status_id int,
  due_date timestamp,
  PRIMARY KEY (person_id)
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

INSERT INTO person(id,name) 
VALUES
(1,'VASANTH')
(2,'JAY') 
(3,'SATISH') 

INSERT INTO category(id,name) 
VALUES
(1,'Operations')
(2,'IT')
-- (3,'IT')

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

INSERT INTO todo(id,person_id,description,due_date)
VALUES
(4,1,' Need to achieve 800 orders',30-09-2021)
(5,2,'Train 5 interns','30-09-2021')
(6,3,'Get trained in devops','30-09-2021')

SELECT person.id,person.name,todo.description,category.name,
priority.level,status.name
FROM todo
INNER JOIN category ON category.id = todo.category_id
INNER JOIN priority ON priority.id = todo.priority_id
INNER JOIN status ON status.id = todo.status_id

