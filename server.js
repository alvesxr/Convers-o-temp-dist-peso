//importacões de pacotes:
import express from 'express'; //adicionar "type": "module" no package.json
import cors from 'cors';

//importacões de funções:
import { converterTemperatura } from '../controllers/conversao_temperatura.js';
import { converterPeso } from '../controllers/conversao_peso.js';
import { converterDistancia } from '../controllers/conversao_distancia.js';
//fim das importações

const server = express(); //instancia do express
server.use(express.json()); //para o express entender o json

server.use(cors()); //habilitando o cors
//cors serve para permitir que o servidor aceite requisições de outros domínios
//isso é importante para o front-end conseguir se comunicar com o back-end

//rotas:

//converter temperatura
server.post('/converter_temperatura', (req, res) => {
    //declaração de variáveis para colocar nos parametros da função
    const temperatura = req.body.temperatura;
    const unidade = req.body.unidade;
    //função de conversão
    try {
        const resultado = converterTemperatura(temperatura, unidade);
        //resposta do servidor
        res.status(200).json({
            resultado: resultado.resultado,
            unidadeResultado: resultado.unidadeResultado
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao converter temperatura.' });
    }
});

//converter peso
server.post('/converter_peso', (req, res) => {
    //declaração de variáveis para colocar nos parametros da função
    const peso = req.body.peso;
    const unidade = req.body.unidade;
    //função de conversão
    try{
        const resultado = converterPeso(peso, unidade);
        //resposta do servidor
        res.status(200).json({
            resultado: resultado.resultado,
            unidadeResultado: resultado.unidadeResultado
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao converter peso.' });
    }
});

//converter distância
server.post('/converter_distancia', (req, res) => {
    const distancia = req.body.distancia;
    const unidade = req.body.unidade;
    //função de conversão
    try{
        const resultado = converterDistancia(distancia, unidade);
        //resposta do servidor
        res.status(200).json({
            resultado: resultado.resultado,
            unidadeResultado: resultado.unidadeResultado
        });
    }catch (error) {
        res.status(500).json({ error: 'Erro ao converter distância.' });
    }
});

//onde vai rodar o servidor
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});