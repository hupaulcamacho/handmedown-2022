DROP DATABASE if exists handmedown2022;
CREATE DATABASE handmedown2022;

\c handmedown2022;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR
);

INSERT INTO users(username, password)
    VALUES('testuser', '1234'),
          ('userone', '1111');