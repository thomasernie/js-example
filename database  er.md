Table user{
    id int 
    firstname varchar
    lastname varchar
    users_emailid varcharacter
    
  }
  
  Table calenders {
    date_start timestamp
    date_end timestamp
    
  }
  
  Table timeings{
    starting_time timestamp
    ending_time timestamp
  
  }
  
  Table todo{
    id int
    titile varchar
    discription varcharacter
    user_id int
  }
  
  
  Table category{
    id int
    name varchar
    user_id int
    
  }
  
  Table todo_list{
  id int
    todo_id int
    category_id int
    category_name varchar
    starting_work varchar
    finishing_work varchar
  }
  
  
  
  
  
  
  
  Ref: "todo"."id" < "todo_list"."todo_id"
  
  Ref: "category"."id" < "todo_list"."category_id"
  
  Ref: "category"."name" < "todo_list"."category_name"
  
  Ref: "todo_list"."starting_work" < "calenders"."date_start"
  
  Ref: "todo_list"."finishing_work" < "calenders"."date_end"
  
  Ref: "timeings"."starting_time" < "todo_list"."starting_work"
  
  Ref: "timeings"."ending_time" < "todo_list"."finishing_work"
  
  Ref: "user"."id" < "todo"."user_id"
  
  Ref: "user"."id" < "category"."user_id"