Table branch_student{
  id int [pk]
  branch_id int
  student_id int
}
Table branch{
  id int  [pk]
  name varchar
}
Table student{
  id int  [pk]
  name varchar
}

Ref: "student"."id" < "branch_student"."student_id"

Ref: "branch"."id" < "branch_student"."branch_id"





TODO EXERCISE


Table owners {
  id int [pk,increment]
  category_id int
  user_id int 
  status_id int
  task varchar
  due_date date
}

Table category{
  categoryid int [pk]
  category_name varchar
}

Ref: "category"."categoryid" < "owners"."category_id"

Table users{
  userid int [pk]
  username varchar
}

Ref: "users"."userid" < "owners"."user_id"

Table status{
  id int [pk]
  work_status inprogress
}

Ref: "status"."id" < "owners"."status_id"