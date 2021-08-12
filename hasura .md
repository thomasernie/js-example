creating todo tabe:

     * id 
     * title
     * created_at
     * is_completed
     * is_public
     * user_id


inserting coloumn:
  mutation {
  insert_todos_task(objects:[{id:1,title: "creating table", user_id: "1"}]) {
    affected_rows
  }
}

query:

query{
    todo{
       id
       titile
       created_at
       is_-public
       is_completed
    }
 }

 subscription:

    subscription{
    todo{
       id
       titile
       created_at
       is_-public
       is_completed
    }
 }


 foreign key:
    
   * in this todo table id is a primary key and user_id is a foreign key.
   * in users table id is a primary key
   * it reference  users_id  in users

relationship:
  we use foreign key to get relationship

relationship querries:

query {
  todos {
    id
    title
    user {
      id
      name
    }
  }
}

