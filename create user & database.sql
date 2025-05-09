create user 'breyner'@'localhost' identified by '051207';
create database dom;
use dom;
grant all privileges on dom.* to 'breyner'@'localhost';
flush privileges;