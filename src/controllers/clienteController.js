// src/controllers/clienteController.js
const Cliente = require('../models/cliente');

// Crear un cliente
const crearCliente = async (req, res) => {
  try {
    const { nombres, apellidos, identificacion, categoria, observacion } = req.body;
    const cliente = await Cliente.create({ nombres, apellidos, identificacion, categoria, observacion });
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear cliente' });
  }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener clientes' });
  }
};

// Obtener un cliente por su ID
const obtenerClientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener cliente' });
  }
};

// Actualizar un cliente
const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, identificacion, categoria, observacion } = req.body;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.update({ nombres, apellidos, identificacion, categoria, observacion });
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar cliente' });
  }
};

// Eliminar un cliente
const eliminarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.destroy();
      res.status(200).json({ message: 'Cliente eliminado' });
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar cliente' });
  }
};

module.exports = {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
};
