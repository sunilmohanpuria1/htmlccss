const Sequelize = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.my_sql.database, config.my_sql.username, config.my_sql.password, {
    host: config.mysqldata.host,
    dialect: config.mysqldata.dialect
});

const users = sequelize.define('users', {
    userId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      }, 
    first_name: {
      type: Sequelize.STRING(255)
    },
    last_name:{
        type: Sequelize.STRING(255)
    }
  }, {
    freezeTableName: true,
});

const contact = sequelize.define('contact', {
  userId: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }, 
  contactNo: {
    type: Sequelize.INTEGER(12),
    unique: true
  },
}, {
  freezeTableName: true,
});

module.exports = {sequelize,users,contact};