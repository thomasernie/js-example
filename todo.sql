CREATE TABLE todo (
    id int,
    user_id int,
    status_id int,
    category_id int,
    due_date date,
    description varchar,
    primary key  (id),
    foreign key (user_id) references users(id),
    foreign key (status_id) references status(id),
    foreign key (category_id) references category(id)
   
);

CREATE TABLE status (
    id int,
    name varchar,
    primary key  (id)
   
);

CREATE TABLE category (
    id int,
    name varchar,
    primary key  (id)
   
);

CREATE TABLE user (
    id int,
    name varchar,
    primary key  (id)
   
);

-- insert values

insert into users (id,name)
values (1,'vasanth')

insert into users (id,name)
values (2,'jay')

insert into users (id,name)
values (3,'satish')

insert into users (id,name)
values (4,'nitish')



-- status

insert into status (id,name)
values (1,'in-progress')

insert into status (id,name)
values (2,'null')

insert into status (id,name)
values (3,'null')



-- category

insert into category (id,name)
values (1,'operations')

insert into category (id,name)
values (2,'IT')


-- todo_datas

insert into todo (id,category_id,user_id,status_id,due_date,description)
values (1,1,1,1,'2021-09-30','Need to achieve 800 orders')

insert into todo (id,category_id,user_id,status_id,due_date,description)
values (2,2,2,1,'2021-09-30','Train 5 interns')

insert into todo (id,category_id,user_id,status_id,due_date,description)
values (3,2,3,1,'2021-09-30','Get trained in devops')

insert into todo (id,category_id,user_id,status_id,due_date,description)
values (4,2,null,1,'2021-10-30','geting train in joins')

insert into todo (id,category_id,user_id,status_id,due_date,description)
values (5,2,null,null,'2021-10-30','geting train in joins')



-- selecting datas

SELECT todo.id, users.name as user,todo.description, category.name as category ,status.name as status,todo.due_date
FROM (((todo
INNER JOIN users ON todo.user_id = users.id)
INNER JOIN category ON todo.category_id = category.id)
INNER JOIN status ON todo.status_id = status.id)


