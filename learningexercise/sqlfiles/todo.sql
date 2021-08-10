create table status(
id int primary key,
status varchar
);
insert into status(id,status) values(1,'in-progress')


create table users(
id int primary key,
user_name varchar
);
insert into users(id,user_name) values(1,'vasanth');
insert into users(id,user_name) values(2,'jay');
insert into users(id,user_name) values(3,'sathish');

select * from users

create table category(
id int primary key,
category_name varchar
);
insert into category(id,category_name) values(1,'operations');
insert into category(id,category_name) values(2,'IT');

create table owners(
 id int primary key,
 user_id int ,
 task_id varchar,
 category_id int,
 status_id int,
 dueDate date,
 foreign key (user_id) references users (id),
 foreign key (category_id) references category (id),
 foreign key (status_id) references status (id)
);
insert into owners(id,user_id,task_id,category_id,status_id,dueDate) values(1,1,'need to achieve 800 orders',1,1,'2021-09-30');
insert into owners(id,user_id,task_id,category_id,status_id,dueDate) values(2,2,'train 5 interns',2,1,'2021-09-30');
insert into owners(id,user_id,task_id,category_id,status_id,dueDate) values(3,3,'get trained in devops',2,1,'2021-09-30');


SELECT user_name,task_id,category_name,status,dueDate
FROM owners
inner join users on owners.user_id=users.id
inner join category on owners.category_id=category.id
inner join status on owners.status_id=status.id

ALTER TABLE owners 
RENAME COLUMN task_id to task; 

SELECT user_name,task,category_name,status,dueDate
FROM owners
inner join users on owners.user_id=users.id
inner join category on owners.category_id=category.id
inner join status on owners.status_id=status.id