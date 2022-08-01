import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres('postgres://username:password@host:port/database', {
  host                 : process.env.PG_HOST,                               // Postgres ip address[s] or domain name[s]
  port                 : parseInt(process.env.PG_PORT as string, 10),           // Postgres server port[s]
  database             : process.env.PG_DATABASE,                           // Name of database to connect to
  username             : process.env.PG_USERNAME,                           // Username of database user
  password             : process.env.PG_PASSWORD,                           // Password of database user
});

export default sql