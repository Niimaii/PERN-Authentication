const { Pool } = require('pg');
const { config } = require('dotenv');
config();

console.log(process.env.PASSWORD);

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pern_auth',
  password: process.env.PASSWORD,
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
