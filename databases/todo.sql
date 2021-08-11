  CREATE TABLE owner(
    id int PRIMARY KEY,
    name varchar
    );

    select * from owner;

  INSERT INTO owner(id,name)
     VALUES(1,'vasanth'),(2,'Jay'),(3,'Satish'),(4,'kiruthika'),(5,'dhanalakshmi'),(6,'vijay');

 CREATE TABLE category(
  id int PRIMARY KEY,
  name varchar
  );

  INSERT INTO category(id,name)
     VALUES(5,'operations'),(6,'IT'),(7,'finance');

select * from category;

  CREATE TABLE status(
     id int PRIMARY KEY,
     name varchar
     );

     INSERT INTO status(id,name)
        VALUES(1,'completed'),(2,'in-progress'),(3,'not-completed'),(4,'on-hold');
    
    select * from status;
    
    CREATE TABLE priority(
    id int PRIMARY KEY,
    name varchar
    );
    
     INSERT INTO priority(id,name)
        VALUES(3,'high'),(1,'medium'),(2,'low');
    
    select * from priority;

CREATE TABLE todo(
      id int PRIMARY KEY,
      owner_id int,
      category_id int,
      status_id int,
      priority_id int,
      description varchar,
      due_date date,
      FOREIGN KEY (owner_id) REFERENCES owner(id),
      FOREIGN KEY (category_id) REFERENCES category(id),
      FOREIGN KEY (status_id) REFERENCES status(id),
      FOREIGN KEY (priority_id) REFERENCES priority(id)
      );

INSERT INTO todo(id,owner_id,category_id,status_id,priority_id,description,due_date)
        VALUES(1,1,5,1,3,'Need to achieve 800 orders','2021-09-28'),
        (2,2,6,2,2,'Train 5 interns','2021-09-28'),
        (3,3,6,3,1,'Get trained in devops','2021-09-28'),
        (4,4,null,null,null,' Need to achieve all targets','2021-09-28');

select * from todo;


-- SELECT owner.id,owner.name,category.name As category,todo.description,todo.due_date
--     FROM todo
--     INNER join owner on todo.owner_id=owner.id
--     INNER join category on todo.category_id=category.id
--     INNER join status on todo.status_id=status.id
--     INNER join priority on todo.priority_id=priority.id
    
    
  SELECT owner.id,owner.name,category.name As category,todo.description,todo.due_date
    FROM todo
    LEFT join owner on todo.owner_id=owner.id
    LEFT join category on todo.category_id=category.id
    LEFT join status on todo.status_id=status.id
    LEFT join priority on todo.priority_id=priority.id
    
    
    -- SELECT  owner.id,owner.name,category.name As category,status.id as status,todo.description,todo.due_date
    -- FROM todo
    -- RIGHT join owner on todo.owner_id=owner.id
    -- RIGHT join category on todo.category_id=category.id
    -- RIGHT join status on todo.status_id=status.id
    -- RIGHT join priority on todo.priority_id=priority.id
    
    -- SELECT owner.id,owner.name,category.name As category,status.id as status,todo.description,todo.due_date
    -- FROM todo
    -- FULL OUTER join owner on todo.owner_id=owner.id
    -- FULL OUTER join category on todo.category_id=category.id
    -- FULL OUTER join status on todo.status_id=status.id
    -- FULL OUTER join priority on todo.priority_id=priority.id
    
    
    
    
    