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

Table task {
  id int [pk]
  user_id int
  category_id int
  status_id int
  description varchar
  due_date date
}
Table user{
  id int [pk]
  name varchar
}


Table category{
  id int [pk]
  name varchar
}





Table status{
  id int [pk]
  status inprogress
}



Ref: "user"."id" < "task"."user_id"

Ref: "category"."id" < "task"."category_id"

Ref: "status"."id" < "task"."status_id"