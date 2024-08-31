import { Sequelize } from 'sequelize';

const DB = process.env.POSTGRES_DATABASE
const sequelize = new Sequelize(DB, { logging: false })

export default sequelize