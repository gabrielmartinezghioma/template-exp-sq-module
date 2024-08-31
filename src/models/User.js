import { DataTypes } from 'sequelize'
import sequelize from '../config/DB/conection.js'

const User = sequelize.define('user',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
);

export default User