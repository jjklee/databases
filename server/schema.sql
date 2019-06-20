DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  users_id INT AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL, 
  PRIMARY KEY (users_id),
  CONSTRAINT username UNIQUE(username)
);

CREATE TABLE messages (
  usernameID INT NOT NULL,
  text VARCHAR(20) NOT NULL, 
  roomname VARCHAR(10) NOT NULL,
  FOREIGN KEY (usernameID) REFERENCES users(users_id)
);

INSERT INTO users (username) values ("sam");
INSERT INTO users (username) values ("janice");

INSERT INTO messages(usernameID, text, roomname) VALUES ((SELECT users_id FROM users WHERE username = "janice"),"Hello", "lobby");
INSERT INTO messages(usernameID, text, roomname) VALUES ((SELECT users_id FROM users WHERE username = "sam"),"Howdie", "lobby" );
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

