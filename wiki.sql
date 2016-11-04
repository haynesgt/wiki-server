DROP DATABASE IF EXISTS wiki;
DROP ROLE IF EXISTS wiki_server;

CREATE ROLE wiki_server WITH PASSWORD 'password' LOGIN;

CREATE DATABASE wiki WITH OWNER = wiki_server;

\c wiki

CREATE TABLE page (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content VARCHAR
);

INSERT INTO page (title, content)
  VALUES ('Main', 'hello');

