const mongoose = require('mongoose');

const dbInit = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
    process.exit(1);
  }
};

module.exports = dbInit;
