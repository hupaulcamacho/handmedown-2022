const pgp = require("pg-promise");
const connectionString = process.env.DATABASE_URL
const db = pgp(cn);

module.exports = db