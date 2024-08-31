import { Sequelize } from 'sequelize';
import 'pg';
import 'pg-hstore';


const DB = process.env.POSTGRES_DATABASE
const sequelize = new Sequelize(DB, { logging: false })

export default sequelize
