Use Sameer;
Create database if not exists Instagram;
Use Instagram;
Create table user(
id INT,
name VARCHAR(30) NOT null,  
email varchar(50),
followers int,
following int);
describe user;
-- demonstration of not null constraint is done
alter table user modify email varchar(40) unique;

-- demo of primary and foriegn key using alter command
alter table user modify id int primary key;
create table post(
id int primary key,
content varchar(100),
user_id int,
foreign key (user_id) references user(id)
);
INSERT INTO user (id, name, email, followers, following) VALUES
(1, 'John Doe', 'john@example.com', 500, 300),
(2, 'Jane Smith', 'jane@example.com', 700, 400),
(3, 'Alice Johnson', 'alice@example.com', 300, 200),
(4, 'Bob Brown', 'bob@example.com', 200, 100),
(5, 'Emma Wilson', 'emma@example.com', 1000, 800);
INSERT INTO post (id, content, user_id) VALUES
(1, 'Hello everyone!', 1),
(2, 'Just posted a new photo.', 2),
(3, 'Feeling excited about the weekend!', 3),
(4, 'Check out my latest blog post.', 4),
(5, 'What a beautiful day!', 5);
select * from user where followers>=200;
-- select using between operator
select * from user where followers between 200 AND 700;
-- select using in operator
select id,name,followers from user where id in (1,2,3);
-- select using not operator
select id,name,followers from user where id not in (2,4);
-- using limit clause to limit the no of rows to be returned when you want to keep less than what you have
select * from user limit 3;
-- using group by clause to keep all the rows grouped on a certain condition and aggregate functions 
-- aggregate functions like sum(),avg(),count(),min(),max() and many more
-- while using aggregate functions we need to select the columns only by which we can specify the condition
select count(id),followers from user group by followers;
-- using having clause after grouping (it can be used after grouping only
select followers,count(id) from user group by followers having followers>=300;

-- order of writing a clause

-- select columns
-- from table_name
-- where condition
-- group by column
-- having condition
-- order by columns asc or desc

-- update command
-- before updation sql will have a safety lock which we need to set to 0
SET SQL_SAFE_UPDATES=0;
-- update table_name set column=value,column=value where condition
update post set content="Hi everyone" where user_id=1;
select * from post;
-- to delete rows in a table
-- delete from table where condition
delete from post where id=1;
INSERT INTO post (id, content, user_id) VALUES
(1, 'Hello everyone!', 1);

-- alter table add column ,remove column modify column, rename table to change the schema
