CREATE Table todo_list(    
  person_name varchar,
  task_performed varchar,
  category varchar,
  PRIMARY KEY (person_name)
);

-- Table performance {    
--   person_name varchar
--   status varchar
--   due_date date
--   PRIMARY KEY (person_name)
-- }
-- CREATE TABLE freight {
--   person_name varchar
--   task_id int
--   status_id int
--   PRIMARY KEY (person_name)
--   FOREIGN KEY (task_id) REFERENCES todo_list(person_name),
--   FOREIGN KEY (status_id) REFERENCES performance(person_name)
-- }