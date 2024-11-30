const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Cliente = sequelize.define('Cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Desactiva las columnas createdAt y updatedAt si no las necesitas
});

module.exports = Cliente;