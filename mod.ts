const data = await fetch("https://raw.githubusercontent.com/jshttp/mime-db/master/db.json");
const db = await data.json();

export default db;
