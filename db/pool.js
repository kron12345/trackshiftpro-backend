import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "trackshiftpro",
  host: "192.168.1.2",
  database: "trackshiftpro",
  password: "trackshiftpro",
  port: 5432,
});

export default pool;
