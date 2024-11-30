const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController'); // Ajusta la ruta si está mal

router.get('/clientes', clienteController.obtenerClientes);
router.post('/clientes', clienteController.crearCliente);

module.exports = router;
