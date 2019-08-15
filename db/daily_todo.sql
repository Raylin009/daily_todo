
DROP database IF EXISTS dailytodo;

CREATE database dailytodo;

\connect dailytodo;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE lists (
  id uuid DEFAULT uuid_generate_v4 (),
  name VARCHAR(150),
  date TIMESTAMPTZ NOT NULL
       DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id uuid DEFAULT uuid_generate_v4 (),
  description VARCHAR(500), 
  complete BOOLEAN NOT NULL 
           DEFAULT FALSE,
  listid uuid, 
  orderinlist INT DEFAULT 0,
  create_at TIMESTAMPTZ NOT NULL
            DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);



