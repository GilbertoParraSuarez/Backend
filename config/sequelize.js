const { Sequelize } = require('sequelize');

// Configuración de la conexión
const sequelize = new Sequelize('bd_prueba', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Desactiva los logs de SQL si no los necesitas
});

module.exports = sequelize;