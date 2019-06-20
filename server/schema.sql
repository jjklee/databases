DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


-- CREATE TABLE rooms (
--   rooms_id INT AUTO_INCREMENT,
--   roomname VARCHAR(10) NOT NULL,
--   PRIMARY KEY (rooms_id)
-- );

CREATE TABLE users (
  users_id INT AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL, 
  password VARCHAR(10) NOT NULL,
  PRIMARY KEY (users_id)
);

CREATE TABLE messages (
  usernameID INT NOT NULL,
  text VARCHAR(20) NOT NULL, 
  -- roomnameID INT NOT NULL,
  roomname VARCHAR(10) NOT NULL,
  FOREIGN KEY (usernameID) REFERENCES users(users_id),
  -- FOREIGN KEY (roomnameID) REFERENCES rooms(rooms_id)
);

-- CREATE TABLE messages (
--   username INT NOT NULL,
--   text VARCHAR(20) NOT NULL, 
--   roomname INT NOT NULL,
-- );
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

