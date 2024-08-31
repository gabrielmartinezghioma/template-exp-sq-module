import sequelize from '../DB/conection.js'
import { DataTypes } from 'sequelize'

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