const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Definir rutas y asociarlas con los controladores
router.post('/clientes', clienteController.crearCliente); // Crear cliente
router.get('/clientes', clienteController.obtenerClientes); // Obtener todos los clientes
router.get('/clientes/:id', clienteController.obtenerClientePorId); // Obtener un cliente por ID
router.put('/clientes/:id', clienteController.actualizarCliente); // Actualizar cliente
router.delete('/clientes/:id', clienteController.eliminarCliente); // Eliminar cliente

module.exports = router;