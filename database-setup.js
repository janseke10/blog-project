const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const {open} = require('sqlite');

async function openDB(){
	return open({
		filename: './mydb.sqlite',
		driver: sqlite3.Database
	})
}

async function setup() {
	const db = await openDB();
	await db.migrate({force: 'last'});

	const people = db.all('SELECT author_id, email, first_name FROM author');
	console.log('ALL PEOPLE', people);
	people.then(function(result) {
		console.log(result) // "Some User token"
	 })

	const posts = db.all('SELECT * FROM post');
	console.log('ALL POSTS', posts);
	posts.then(function(result) {
		console.log(result) // "Some User token"
	 })
}

setup();
