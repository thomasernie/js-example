CREATE TABLE todo_datas (
    id int,
    user_id int,
    status_id int,
    category_id int,
    due_date timestamp,
    task varchar,
    primary key  (id),
    foreign key (user_id) references users(id),
    foreign key (status_id) references status(id),
    foreign key (category_id) references category(id)
   
);

CREATE TABLE status (
    id int,
    status_name varchar,
    primary key  (id)
   
);

CREATE TABLE category (
    id int,
    category_name varchar,
    primary key  (id)
   
);

CREATE TABLE users (
    id int,
    user_name varchar,
    primary key  (id)
   
);

-- insert values

insert into users (id,user_name)
values (1,'vasanth')

insert into users (id,user_name)
values (2,'jay')

insert into users (id,user_name)
values (3,'satish')

-- status

insert into status (id,status_name)
values (1,'in-progress')

insert into status (id,status_name)
values (2,'in-progress')

insert into status (id,status_name)
values (3,'in-progress')


-- category

insert into category (id,category_name)
values (1,'operations')

insert into category (id,category_name)
values (2,'IT')


-- todo_datas

insert into todo_datas (id,category_id,user_id,status_id,due_date,task)
values (1,1,1,1,'2021-09-30','Need to achieve 800 orders')

insert into todo_datas (id,category_id,user_id,status_id,due_date,task)
values (2,2,2,2,'2021-09-30','Train 5 interns')

insert into todo_datas (id,category_id,user_id,status_id,due_date,task)
values (3,2,3,3,'2021-09-30','Get trained in devops')
