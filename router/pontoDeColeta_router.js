const express = require('express');
const router = express.Router();
const pontoDeColetaController = require('../controller/pontoDeColeta_controller');

// Listar todos os pontos de coleta
router.get('/pontos-coleta', pontoDeColetaController.listar);

// Inserir um novo ponto de coleta
router.post('/pontos-coleta', pontoDeColetaController.inserir);

// Buscar ponto de coleta pelo endereço
router.get('/pontos-coleta/getend/endereco', pontoDeColetaController.buscarPorEndereco);

// Buscar ponto de coleta pelo ID
router.get('/pontos-coleta/:id', pontoDeColetaController.buscarPorId);

// Buscar pontos de coleta por tipo de material (usando query params)
router.get('/pontos-coleta/getlixo/tipoLixo', pontoDeColetaController.buscarPorTipoLixo);

// Buscar pontos de coleta por bairro (usando query params)
router.get('/pontos-coleta/getbairro/bairro', pontoDeColetaController.buscarPorBairro);

// Atualizar ponto de coleta pelo ID
router.put('/pontos-coleta/:id', pontoDeColetaController.atualizar);

// Deletar ponto de coleta pelo ID
router.delete('/pontos-coleta/:id', pontoDeColetaController.deletar);

module.exports = router;
