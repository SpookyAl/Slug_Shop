INSERT INTO users (name, username, email, password, role)
VALUES ('John Doe', 'johndoe', 'johndoe@ucsc.edu', crypt('password', gen_salt('bf')), 'user');
INSERT INTO users (name, username, email, password, role)
VALUES ('Jose Chavez', 'jchave72', 'jchave72@ucsc.edu', crypt('password', gen_salt('bf')), 'admin');
INSERT INTO users (name, username, email, password, role)
VALUES ('Micheal Alaniz', 'malaniz', 'malaniz@ucsc.edu', crypt('password', gen_salt('bf')), 'admin');