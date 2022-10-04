
import { Router } from 'express';
import {
    /* home, */
    getTareas,
    getTareaByID,
    formTarea, 
    createTareas, 
    updateTareas, 
    deleteTareas 
} from '../controllers/homeController.js'
// aca podria crear un nuevo controler para atlas 
//si no quisiera cambiar todas las const de MONGO A MONGOATLAS
// from '../controllers/homeControllerAtlas.js'

export const router = Router();

/* router.get('/', home); */
router.get('/', getTareas);
router.get('/editarTarea/:id', getTareaByID);
router.get('/addTarea', formTarea);
router.post('/create', createTareas);
router.post('/actualizar/:id', updateTareas);
router.delete('/delete/:id', deleteTareas);




