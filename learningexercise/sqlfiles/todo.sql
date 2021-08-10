create table "user"(
id int primary key,
name varchar
)
insert into "user"(id,name) values(1,'vasanth');
insert into "user"(id,name) values(2,'jay');
insert into "user"(id,name) values(3,'sathish');
create table status(
id int primary key,
status varchar
);
insert into status(id,status) values(1,'in-progress')
create table category(
id int primary key,
name varchar
);
insert into category(id,name) values(1,'operations');
insert into category(id,name) values(2,'IT');
create table task(
 id int primary key,
 user_id int,
 category_id int,
 status_id int,
 description varchar,
 dueDate date,
 foreign key (user_id) references "user" (id),
 foreign key (category_id) references category (id),
 foreign key (status_id) references status (id)
);

insert into task(id,user_id,category_id,status_id,description,dueDate) values(1,1,1,1,'need to achieve 800 orders','2021-09-30');
insert into task(id,user_id,category_id,status_id,description,dueDate) values(2,2,2,1,'train 5 interns','2021-09-30');
insert into task(id,user_id,category_id,status_id,description,dueDate) values(3,3,2,1,'get trained in devops','2021-09-30');

SELECT "user".name,description,category.name as category,status.status as status,dueDate
FROM task
inner join "user" on task.user_id="user".id
inner join category on task.category_id=category.id
inner join status on task.status_id=status.id










