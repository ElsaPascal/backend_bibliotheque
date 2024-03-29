const express = require('express');

const router = express.Router();

const  { v4 : uuidv4} = require('uuid') ;

const musiquesControllers = require('../controllers/musiques-controllers');



// chemin racine est  : /api/musiques

router.get('/', musiquesControllers.getMusiques); 
router.get('/:musiqueId', musiquesControllers.getMusiqueById);
router.post('/', musiquesControllers.createMusique);
router.patch('/:musiqueId', musiquesControllers.updateMusique);
router.delete('/:musiqueId', musiquesControllers.deleteMusique);
 



module.exports = router;

