import mysql  from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "breyner",
  password: "051207",
  database: "dom"
});

export default connection;