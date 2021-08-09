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
=> 

d) DDl? DML?
=> SQL commands are divided into four subgroups;
1) DDL
   DDL is abbreviated as Data Definition Language
   It deals with the database schemas and descriptions, basically of how the data should be stored in the database.
* CREATE - to create a database and its objects like (table, index, views, store procedure, function, and triggers)
* ALTER - alters the structure of the existing database
* DROP - delete objects from the database
* TRUNCATE - remove all records from a table, including all spaces allocated for the records are removed
* COMMENT - add comments to the data dictionary
* RENAME - rename an object

2) DML - 
3) DCL 
4) TCL

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

