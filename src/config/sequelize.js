// src/config/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres', // O el dialecto de tu base de datos (mysql, sqlite, etc.)
    username: 'tu_usuario', // Reemplaza con tus credenciales
    password: 'tu_contraseña', // Reemplaza con tus credenciales
    database: 'nombre_de_tu_base_de_datos', // Reemplaza con tu base de datos
});

module.exports = sequelize;
