
DROP database IF EXISTS dailytodo;

CREATE database dailytodo;

\connect dailytodo;

CREATE TABLE lists (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(150),
  date TIMESTAMPTZ NOT NULL
       DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE items (
  id INT NOT NULL PRIMARY KEY,
  description VARCHAR(500), 
  complete BOOLEAN,
  listid INT,
  orderinlist INT DEFAULT 0,
  create_at TIMESTAMPTZ NOT NULL
            DEFAULT CURRENT_TIMESTAMP
);



