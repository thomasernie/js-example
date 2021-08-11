CREATE TABLE owner(
  id int PRIMARY KEY,
  name varchar
  );
  
  INSERT INTO owner(id,name)
     VALUES(1,'vasanth'),(2,'Jay'),(3,'Satish');

CREATE TABLE category(
  id int PRIMARY KEY,
  name varchar
  );

  INSERT INTO category(id,name)
     VALUES(1,'operations'),(2,'IT');

  CREATE TABLE status(
     id int PRIMARY KEY,
     name varchar
     );

     INSERT INTO status(id,name)
        VALUES(1,'completed'),(2,'in-progress'),(3,'not-completed');
    
    CREATE TABLE priority(
    id int PRIMARY KEY,
    name varchar
    );
    
     INSERT INTO priority(id,name)
        VALUES(1,'high'),(2,'medium'),(3,'low');
    
    select *from owner;
    
    select *from category;
    
    select *from status;
    
    select *from priority;

CREATE TABLE todo(
      id int PRIMARY KEY,
      user_id int,
      category_id int,
      status_id int,
      priority_id int,
      description varchar,
      due_Date date,
      FOREIGN KEY (user_id) REFERENCES owner(id),
      FOREIGN KEY (category_id) REFERENCES category(id),
      FOREIGN KEY (status_id) REFERENCES status(id),
      FOREIGN KEY (priority_id) REFERENCES priority(id)
      );

INSERT INTO todo(id,user_id,category_id,status_id,priority_id,description,due_date)
        VALUES(1,1,1,1,1,'Need to achieve 800 orders','2021/09/30'),
        (2,2,2,2,2,'Train 5 interns','2021/09/30'),
        (3,3,2,3,3,'Get trained in devops','2021/09/30');

     select *from todo;

    

      INSERT INTO status(id,name)
        VALUES(4,'on-hold');

          INSERT INTO owner(id,name)
     VALUES(4,'kiruthika'),(5,'dhanalaksmi'),(6,'arjun');


    SELECT owner.name ,todo.description,category.name as category,status.name as status,todo.due_Date
    FROM todo
    FULL OUTER join owner on todo.user_id=owner.id
    FULL OUTER join category on todo.category_id=category.id
    FULL OUTER join status on todo.status_id=status.id
    FULL OUTER join priority on todo.priority_id=priority.id
    order by todo.id;