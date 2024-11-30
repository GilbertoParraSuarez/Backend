const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa la librería CORS
const config = require('../config/config'); // Asegúrate de usar la ruta correcta
const clienteRoutes = require('./routes/clienteRoutes');
const sequelize = require('../config/sequelize'); // Asegúrate de usar la ruta correcta para la configuración de Sequelize
const app = express();
const port = config.PORT; // Utiliza el puerto definido en config.js

// Configura CORS para permitir solicitudes desde el front-end
app.use(cors({
  origin: 'http://localhost:3000', // Permite solicitudes solo desde esta URL
}));

app.use(bodyParser.json());

// Ruta para mostrar el mensaje en el navegador
app.get('/', (req, res) => {
  res.send(`
    <h1>Servidor ejecutándose en el puerto: ${port}</h1>
  `);
});

// Usa las rutas para los clientes
app.use('/api', clienteRoutes);

// Ruta para manejar solicitudes no encontradas
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
