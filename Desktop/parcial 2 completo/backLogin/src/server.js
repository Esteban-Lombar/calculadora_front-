const express = require('express');
const cors = require('cors');
const dbInit = require('./config/db'); // Revisa si la ruta es correcta
const authRoutes = require('./routes/auth');
const codigoRoutes = require('./routes/codigo'); // Nueva línea para importar las rutas de códigos
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

dbInit();

app.use('/auth', authRoutes);
app.use('/codigo', codigoRoutes); // Cambiado a '/codigo' para que sea más sencillo de acceder

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
