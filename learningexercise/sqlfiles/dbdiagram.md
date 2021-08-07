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

