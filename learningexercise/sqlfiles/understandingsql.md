DATABASE:
       database is a collection of data or informtaion which is stored electronically in a computer.
       these database is modelled in rows and columns . a database is usually controlled by database management system (dbms)

   SQL:
       most database uses sql(structured query language) for writing and querying the data.these data can be easily managed,modified,controlled through sql     


   ACID properties of DBMS:
            A - atomicity
            C - consistency    
            I - isolation
            D - durablity

   Atomicity :
           atomicity defines that the data must remain atomic . it means if any transaction is performed or executed should be complete or it should not be exexuted at all.

   Consistency :
           the database must be maintained  consistent.it means the database must be same before and after any transaction.

           A = 500         B=300    = 800

             T1       |      T2
           read(A)    |     read(B)
           A=A-100    |     B=B+100
           write(A)   |     write(B)
                        
                            after the transaction amount must be same = A+B=800


   Isolation :
           This property ensures that multiple transaction can occur at the same time without any inconsistency of the database state.


           x=100      T1       |     T2
           y=100    read(x)    |    read (x)                           
                    x=x+100    |    read (y)
                    write(x)   |     z=x+y
                    ready(y)   |    write(z) =250
                               |
                    y=y-50
                    write(y)

   Durablity :
           The database must be durable enought to hold its latest updates even if the system fail in halfway while executing.It shloud hold the modified data  and after it restarts it shoud get updated the holded data.




Normalization:
           normalization is way of organizing a database.
           it is a technique for organizing a data in a systematic way to avoid redundancy
           it splits large table to multiple tables and define relationship between the data. 
           
           it is used to avoid redundancy - repeated the data
           insertion anomaly(problems) - it is not always possible a null data 
           update anomaly - if we need to change anything we need to change in all the data entered,or else it will get wrong
           deletion anamoly -if we delete particular data in all other datas linked will also get deleted 

FRist normal form (1NF):
               if A is in 1nf ,it does not contain multivalued attribute.it should be only single valued.

Second normal form(2NF)
               it should be in first normal form
            it should not have a partial dependency




DDL DML :
       data definition language DDL and data manipulation language DML are the types of sql query language
        DDL used to specifiy the dsatabase schema.it is used for creating tables ,schema,indexes etc.
        DDL is the structure of the database
operation in DDL :
        create(create a database instance),
         alter(alter structure of database) ,
         drop(temprary delete the database),
         truncate (delete tables), 
         rename ,
          to comment.

        DML is used for accessing and manipulatinhg(changing) data in database

operations in DML :
         select(read records from table,to view record from table),
         insert (insert record or data into the table),
         update (to update data into table),
          delete (to delete all records from table)










