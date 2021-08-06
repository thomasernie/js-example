Table user as user{
  id int [pk,increment]
  full_name varchar
  task_created timestamp
  }
  
Table ToDo_id {
   ToDo_id int[pk]
   title varcharacter
   day varchar
   }
Table work_title{
  title  varchar [ref: > ToDo_id.title]
  description varchar
  categories varchar
  }   
Table category{
  categories varchar [ref: > work_title.categories]
  sports varchar
  work varchar
  sleep timestamp
}
    
Table Todo_list {
     day_ varchar
     description varchar
     duedate datetime [ref: > user.task_created]
     completed boolean
     pending boolean 
   }
   
  
 ref:user.id > ToDo_id.ToDo_id
  
Table work_status {
     work_done boolean [ref: > Todo_list.completed]
     work_not_done boolean [ref: > Todo_list.pending]
}
  
  
Ref: "category"."sports" < "Todo_list"."completed"

Ref: "category"."sports" < "Todo_list"."pending"

Ref: "category"."work" < "Todo_list"."completed"

Ref: "category"."work" < "Todo_list"."pending"

Ref: "category"."sleep" < "Todo_list"."completed"

Ref: "category"."sleep" < "Todo_list"."pending"

Ref: "Todo_list"."description" < "work_title"."description"

Ref: "ToDo_id"."day" < "Todo_list"."day_"

Ref: "Todo_list"."duedate" < "Todo_list"."completed"

Ref: "Todo_list"."duedate" < "Todo_list"."pending"