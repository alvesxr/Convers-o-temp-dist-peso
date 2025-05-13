//importacões de pacotes:
import express from 'express'; //adicionar "type": "module" no package.json

//importacões de funções:
import { converteTemperatura } from '../controllers/conversao_temperatura';
import { converterPeso } from '../controllers/conversao_peso';
import { converterDistancia } from '../controllers/conversao_distancia';
//fim das importações

const server = express(); //instancia do express
server.use(express.json()); //para o express entender o json

//rotas

//converter temperatura
server.post('/converter_temperatura', (req, res) => {
    
});

//converter peso
server.post('/converter_peso', (req, res) => {

});

//converter distância
server.post('/converter_distancia', (req, res) => {

});

//onde vai rodar o servidor
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});