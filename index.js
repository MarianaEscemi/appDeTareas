

// Configuración con ES6
import express from 'express';
import path from 'path';
import hbs from 'hbs';
import nodemailer from 'nodemailer';
import morgan from 'morgan';
import 'dotenv/config';
import {fileURLToPath} from 'url';
//import './db/conexion.js';
import { router } from './router/homeRouter.js'



const app = express();
const PORT = process.env.PORT;

//__dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);


//Funciones Middlewares
app.use(morgan('common'));  //dev common combined
app.use(express.json());
app.use(express.urlencoded({extended: true})); // para la lectura de formularios
app.use(express.static(path.join(__dirname, 'public'))); // para que nuestro proyecto utilice y una el dirname con la carpeta public

//rutas
app.use(router)


//seteamos las vistas de la ingenieria
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));



//aplicacion en escucha por el puerto asignado
app.listen(PORT, () => {
    console.log(`Aplicacion activa y trabajando en el puerto ${PORT}`); 
});


// en caso de error se avisa
app.on(`error`, (err) => {
    console.log(`tenemos un error en el espacio`);
});

