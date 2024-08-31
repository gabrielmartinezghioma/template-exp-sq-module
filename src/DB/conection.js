import { Sequelize } from 'sequelize';
import pg from 'pg';
import PgHstore from 'pg-hstore';


const DB = process.env.POSTGRES_DATABASE
const sequelize = new Sequelize(DB, { logging: false })

export default sequelize

// import pg from 'pg';

// const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_DATABASE_URL,
// })

// console.log(pool);

// export default pool