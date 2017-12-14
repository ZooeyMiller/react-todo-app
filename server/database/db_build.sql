BEGIN;

DROP TABLE IF EXISTS todos cascade;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  checked BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO todos (name, checked) VALUES ('set up database', false);

INSERT INTO todos (name, checked) VALUES ('connect db to server', false);

INSERT INTO todos (name, checked) VALUES ('make api call to populate state', false);

INSERT INTO todos (name, checked) VALUES ('make addTodo talk to db', false);


INSERT INTO todos (name, checked) VALUES ('make removeTodo talk to db', false);


COMMIT;
