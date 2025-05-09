const express = require('express'); 
const router = express.Router(); 

const ObjetosController = require('../controllers/objetos'); 

router.get('/objetos', ObjetosController.listarObjetos); 
router.post('/objetos', ObjetosController.cadastrarObjetos); 
router.patch('/objetos', ObjetosController.editarObjetos); 
router.delete('/objetos', ObjetosController.apagarObjetos); 

module.exports = router;
