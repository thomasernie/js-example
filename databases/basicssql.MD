What is Data => Data is a raw and unorganized fact.
             => Data can be facts related to any  in consideration . 
             => For example, your name, age, height, weight, etc. are some data related to us. A picture, image, file, pdf, etc. can also be considered data.

1) DATABASES =>  A database is a systematic collection of data. They support electronic storage and manipulation of data. Databases make data management easy.        
             => For Example consider Facebook: It needs to store, manipulate, and present data related to members, their friends, member activities, messages, advertisements, and a lot more.

 What is the Database Transaction?
             => The transaction is a set of operations. The set of the read/write operation on the database is called the database transaction.

                 => Read is retrieving information from the database.
                 => Write is inserting, updating, and deleting entries from the database.

2) ACID Properties  => ACID properties are used to avoid errors that occur while transactions in sql.
                    => ACID is an abbreviation for Atomicity,Consistency,Isolation,Durability

    =>  Atomicity - Relating //The entire transaction  takes place at once or doesn’t happen at all.
                     =>  There is no midway i.e. transactions do not occur partially.
                     =>  Each transaction is considered as one unit and either runs to completion or is not executed at all.
                It involves the following two operations. 
                —Abort: If a transaction aborts, changes made to database are not visible. 
                —Commit: If a transaction commits, changes made are visible. 
                   //Atomicity is also known as the ‘All or nothing rule’.

       (Example ) : Here, the set of operations are

                Deduct the amount of $100 from Alice’s account.
                Add amount $100 to Bob’s account.
            //All operations in this set should be done.

            //If the system fails to add the amount in Bob’s account after deducting from Alice’s account, revert the operation on Alice’s account.      

    => Consistency - Evenness, Stability // The database is consistent before and after the transaction.
               => If the system fails because of the invalid data while doing an operation, revert back the system to its previous state.
        
       ( EXAMPLE ) :
                The total amount in Alice’s and Bob’s account should be the same before and after the transaction.  The sum of the money in Alice and Bob’s account before and after the transaction is $200. So this transaction preserves consistency ACID.

    => Isolation - Separation // If you are performing multiple transactions on the single database, operation from any transaction should not interfere with operation in other transactions. the execution of all transactions should be isolated from other transactions.

        (Example) :

             If there is any other transaction (between Mac and Alice) going, it should not make any effect on the transaction between Alice and Bob. Both the transactions should be isolated.

     => Durability - Ensures transactions are saved permanently and do not accidentally disappear or get erased, even during a database crash.    
                => All the above three properties should be satisfied while the transaction in progress. But durability issues can happen even after the completion of the transaction.
           //So this is the ACID Property After Completion of Transaction. 
            
        (Example):

              => It may happen. A system gets crashed after completion of all the operations. If the system restarts it should preserve the stable state. 
              => An amount in Alice and Bob’s account should be the same before and after the system gets a restart.

  //The ACID properties, in totality, provide a mechanism to ensure correctness and consistency of a database in a way such that each transaction is a group of operations that acts a single unit, produces consistent results, acts in isolation from other operations and updates that it makes are durably stored. 

  3) DDL Commands: // Data Definition Language.
               =>  It is used to create and modify the structure of database objects in SQL.  

          (Eg): DDL Commands in SQL Examples:
                   CREATE – Creates objects e.g. table in the database
                   ALTER – Alters objects of the database. e.g. modifying a column of a table
                   DROP – Deletes objects from the database. e.g. remove table from a sql database.
                  TRUNCATE – Deletes all records from a table and resets table identity to initial value.
     
     DML Commands : // Data Manipulation Language.
                =>   To allow you to manage the data stored in the database, although DML commands are not auto-committed.
                =>   Moreover, they are not permanent. So, It is possible to roll back the operation. 
                =>   used to retrieve, store, Modify, delete, insert and update data in database. 

           (Eg) : DML Command in SQL Examples:
                     SELECT-  This command or statement is used to retrieves data from a table
                     INSERT –  Inserts new data into a table
                     UPDATE – Updates or modifies existing data into a table
                     DELETE – Deletes records from a table


    4) Joins => A JOIN is a clause that is used to combine rows from two or more tables, based on a related column between them.

        i) INNER JOIN: Returns records that have matching values in both tables.
         Syntax - SELECT column_name(s)
          FROM table1 
          INNER JOIN table2 ON table1.column_name = table2.column_name;

        ii) LEFT JOIN: Returns all records from the left table, and the matched records from the right table
         Syntax - SELECT column_name(s) 
         FROM table1 
         LEFT JOIN table2 ON table1.column_name = table2.column_name;

        iii) RIGHT JOIN: Returns all records from the right table, and the matched records from the left table. 
        Syntax - SELECT column_name(s)
         FROM table1 
         RIGHT JOIN table2 ON table1.column_name = table2.column_name;

        iv) FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table 
        Syntax - SELECT column_name(s)
         FROM table1
         FULL OUTER JOIN table2 ON table1.column_name = table2.column_name WHERE condition;                

5) Normalization
       Data Redudancy=> It is a condition that occurs when the same piece of data exists in multiple places in the database whereas data inconsistency is a condition that occurs when the same data exists in different formats in multiple tables.

            => Normalization is the process of organizing the data in the database.
            => It is used to minimize the redundancy from a relation or set of relations. It is also used to eliminate the undesirable characteristics like Insertion, Update and Deletion Anomalies.
            => It divides the larger table into the smaller table and links them using relationship.


for todo

//table name should not be in plural
//table name should not be in generic
  


 => view => virtual table // view always shows up_to-date data

 => count() function => returns no.of (rows/ values) that  matches specified column

 => group by => particular column has same values ,but in different rows,then it will arrange rows in a group


 SQL functions:
 Two categories->
    Aggregate and Scalar Functions:
     1. Aggregate function->

       i) COUNT() // used to count the number of rows returned in a SELECT statement
   
    Syntax:
      SELECT COUNT(column_name)
       FROM table_name;

       ii) AVG(): It returns average value after calculating from values in a numeric column.

    Syntax:
SELECT AVG(column_name) FROM table_name;  



