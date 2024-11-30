const Cliente = require('../models/cliente');

// Crear un cliente
const crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, identificacion, categoria } = req.body;
    const cliente = await Cliente.create({ nombre, apellido, identificacion, categoria });
    res.status(201).json(cliente);
  } catch (error) {
    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};

// Obtener un cliente por ID
const obtenerClientePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al obtener cliente:', error);
    res.status(500).json({ error: 'Error al obtener cliente' });
  }
};

// Actualizar un cliente
const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, identificacion, categoria } = req.body;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    cliente.nombre = nombre || cliente.nombre;
    cliente.apellido = apellido || cliente.apellido;
    cliente.identificacion = identificacion || cliente.identificacion;
    cliente.categoria = categoria || cliente.categoria;
    await cliente.save();
    res.status(200).json(cliente);
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    res.status(500).json({ error: 'Error al actualizar cliente' });
  }
};

// Eliminar un cliente
const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    await cliente.destroy();
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    res.status(500).json({ error: 'Error al eliminar cliente' });
  }
};

module.exports = {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
};