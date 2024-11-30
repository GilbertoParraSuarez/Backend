const { Sequelize } = require('sequelize');
const config = require('./config'); // Asegúrate de que `config` existe y tiene la configuración necesaria

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: 'mysql', // Cambia a tu dialecto de base de datos si no usas MySQL
});

module.exports = sequelize;
