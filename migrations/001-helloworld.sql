-- Up
CREATE TABLE author (
	author_id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name TEXT,
	middle_name TEXT,
	last_name TEXT,
	email TEXT,
	password TEXT 
);

CREATE TABLE post (
	post_id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	content TEXT,
	created_at DATETIME,
	updated_at DATETIME,
	published_at DATETIME,
	author_id INTEGER REFERENCES author(author_id),
	slug TEXT
);

CREATE TABLE category (
	category_id INTEGER PRIMARY KEY AUTOINCREMENT,
	category_name TEXT,
	parent_id INTEGER REFERENCES category(category_id),
	is_in_header BOOLEAN,
	slug TEXT
);


CREATE TABLE post_category (
	post_id INTEGER REFERENCES post(post_id),
	category_id INTEGER REFERENCES category(category_id)
);

CREATE TABLE img (
	image_id INTEGER PRIMARY KEY AUTOINCREMENT,
	img_name TEXT,
	is_header BOOLEAN,
	place INTEGER,
	post_id INTEGER REFERENCES post(post_id)
);

CREATE TABLE comment (
	comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
	author_name TEXT,
	author_email TEXT,
	title TEXT,
	content TEXT,
	place INTEGER,
	post_id INTEGER REFERENCES post(post_id)
); 


INSERT INTO author (first_name, last_name, email) values ('Rob', 'Wong', 'rob@gmail.com');
-- INSERT INTO Person (firstName, middleName, lastName, email) values ('Janneke', 'van', 'Hulten', 'janneke@gmail.com');
INSERT INTO post (title, content, created_at, updated_at, published_at, author_id, slug) values ('lorem ipsum1', 'lorem upsum blablabla', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 'lorips1');
INSERT INTO post (title, content, created_at, updated_at, published_at, author_id, slug) values ('lorem ipsum2', 'lorem upsum blablabla', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '1', 'lorips2');
INSERT INTO category (category_name, is_in_header, slug) values ('ONEBAG', '1', 'onebag');
INSERT INTO category (category_name, is_in_header, slug) values ('TEST', '1', 'test');
INSERT INTO post_category(post_id, category_id) values ('1', '1');
INSERT INTO post_category(post_id, category_id) values ('2', '1');


-- Down

DROP TABLE author;
DROP TABLE post;
DROP TABLE category;
DROP TABLE post_category;
DROP TABLE img;
DROP TABLE comment;
