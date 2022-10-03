import mongodb from 'mongodb';
import 'dotenv/config';

//1. Creamos la constante para utilizar mongodb
const mongoCliente = mongodb.MongoClient;

//2. Pasamos la url local de la ubicacion de la db de mongo y la database
const MONGO = process.env.MONGO;
const MONGOATLAS = process.env.MONGOATLAS;

//3. Conectamos nuestra app a Mongo
// traemos desde mongo Atlas el useNewUrlParser: true useUnifiedTopology: true para que se conecte a mongo y M atlas
try {
    mongoCliente.connect(MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`Conexion correcta a la Database.`);
} catch (error) {
    console.log(`No estamos conectados a la Database.`);
};



