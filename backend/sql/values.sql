INSERT INTO users (name, username, email, password)
VALUES ('John Doe', 'johndoe', 'johndoe@ucsc.edu', crypt('password', gen_salt('bf')));
