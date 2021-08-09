1) Explain the following:
a) Database
=> A database -> Organised collection of information/data.
   Data       -> Data is the name given to basic facts and entities such as names and numbers. A data can be anything such as Images, sounds, multimedia etc.

b) What is ACID property?
=> ACID abreviated as A = Automicity,C = Consistency,I = Isolation,D = Durability
   ACID property defines how a database should be.
   This can be well explained by using a term transaction. A transaction can be anything either a money transaction, message etc.
   Transactions access data using read and write operations.

   ACID (Atomicity, Consistency, Isolation, Durability) is a set of properties of database transactions intended to guarantee validity even in the event of errors, power failures, etc.
 * Automicity   - The entire transaction takes place at once or doesn't happen at all.
                  If there is transaction between "A" and "B", the transacction can take place and be successful or cannot take place at all.

 * Consistency  - The database must be consistent before and after the transaction.
                  If there is transaction between "A" and "B",the flow between the transaction should be consistent(here,show the data as it is).

 * Isolation    - Multiple Transactions occur independently without interference 
                  If there is transaction between "A" and "B" and "c" and "D", the transaction will be parallel but the output should be serial. 

 * Durability   - The changes of a successful transaction occures even if the system failure occurs.
                  When a transaction occurs, if there is any disturbance/system, failure the data will be stored in a disc and can be retrieved whenever we switch on the system back.


c) Normalization
=> Way of organising data in database.
   why normalization?
   - to avoid redundancy : repeated data cannot be in one table with simiar content.
   - to avoid Insertion,Deletion and Update anomalies 
The database normalization process is divided into following the normal form:
1) First Normal Form (1NF)
   Each column or row should have only single value attribute.
   The table should be atomic(an operation appears to occur at a single instant between its invocation and its response).

2) Second Normal Form (2NF)
   Table should be 1NF.
   There should not be partial dependency.
   Functional dependency - Each and every other column should be dependent on the the Primary key(unique key).
   Partial Dependency - here, a nonprime attribute is functionally dependent on part of a candidate key(two primary key-data to be found with two other data). 

3) Third Normal Form (3NF)
   Table should be 2NF.
   There should not be Transitive dependency.
   For ex - 
   Column C -> Depend on -> Column B
   Column B -> Depend on -> Column A
   So Column C -> Depend on -> Column A (where A is a Primary Key) 
   so here, column C is indirectly dependent on column A via column B. This is called Transitive dependency.

4) Boyce-Codd Normal Form (BCNF)
   Table should be 3NF.
   There should not be reverse dependency.
   For every dependency B -> A, A is super key.(This condition should not exist)
   
5) Fourth Normal Form (4NF)
6) Fifth Normal Form (5NF)

d) DDl? DML?
=>
1) DDL
   DDL is abbreviated as Data Definition Language
   It deals with the database schemas and descriptions, basically of how the data should be stored in the database.
* CREATE - to create a database and its objects like (table, index, views, store procedure, function, and triggers)
* ALTER - alters the structure of the existing database
* DROP - delete objects from the database
* TRUNCATE - remove all records from a table, including all spaces allocated for the records are removed
* COMMENT - add comments to the data dictionary
* RENAME - rename an object

2) DML 
   It is abbreviated as Data manipulation Language.
   It deals with data manipulation and includes most common SQL statements such as SELECT, INSERT, UPDATE, DELETE, etc., and 
   It is used to store, modify, retrieve, delete and update data in a database.
* SELECT - retrieve data from a database
* INSERT - insert data into a table
* UPDATE - updates existing data within a table
* DELETE - Delete all records from a database table
* MERGE - UPSERT operation (insert or update)
* CALL - call a PL/SQL or Java subprogram
* EXPLAIN PLAN - interpretation of the data access path
* LOCK TABLE - concurrency Control


e) Joins
=> A JOIN is a clause that is used to combine rows from two or more tables, based on a related column between them.
* INNER JOIN: Returns records that have matching values in both tables.
Syntax -
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;

* LEFT JOIN: Returns all records from the left table, and the matched records from the right table
Syntax - 
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;

* RIGHT JOIN: Returns all records from the right table, and the matched records from the left table.
Syntax - SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;

* FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table
Syntax - 
SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;

