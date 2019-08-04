
DROP database IF EXISTS dailytodo;

CREATE database dailytodo;

\connect dailytodo;

CREATE TABLE lists (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(150)
);

CREATE TABLE items (
  id INT NOT NULL PRIMARY KEY,
  description VARCHAR(500), 
  status BOOLEAN,
  listid INT,
  orderinlist INT
);

