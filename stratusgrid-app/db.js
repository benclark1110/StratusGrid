// const { Pool } = require('pg');
// const { host, user, database, password, port } = require('./config');

// // Create a pool instance and pass in our config, which we set in our env vars
// const pool = new Pool({
//     host,
//     user,
//     database,
//     password,
//     port,
// });

// module.exports = {
//     query: (text, params, callback) => {
//         return pool.query(text, params, callback);
//     },
//     connect: (err, client, done) => {
//         return pool.connect(err, client, done);
//     },
// };

const fs = require('fs')
const { Pool } = require('pg')

require("dotenv").config()
const databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';
const pool = new Pool({
    connectionString: databaseUrl,
})

if (process.env.NODE_ENV !== 'production') {
    const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' })
    pool.query(seedQuery, (err, res) => {
        console.log(err, res)
        console.log('Seeding Completed!')
        pool.end()
    })
}