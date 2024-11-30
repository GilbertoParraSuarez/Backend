// src/models/cliente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

// Definición del modelo Cliente
const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Puede ser cédula o RUC
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observacion: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'clientes', // Asegúrate de que el nombre coincida con el de tu tabla
  timestamps: false, // Si no tienes campos createdAt/updatedAt
});

module.exports = Cliente;
