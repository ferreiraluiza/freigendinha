import express from 'express';
import cors from 'cors';

const server = express()
const port = 3001

server.use(express.json());
server.use(cors());

server.get('/cards', (req, res) => {
    let cards = [
        {
          "titulo": "componentes",
          'assuntos': '- objetos e listas de objetos',
          "data": "01/jan",
          "status": "Em andamento",
          "entregaTrab": true
        },
      
        {
          "titulo": "Renderizaçãp e Efeito",
          'assuntos': '- componentes na renderização',
          "data": "01/jan",
          "status": "completo",
          "entregaTrab": true
        },
        {
          "titulo": "consumindo APIs - parte 1",
          'assuntos': '- objetos e listas de objetos',
          "data": "01/jan",
          "status": "completo",
          "entregaTrab": true
        },
        {
          "titulo": "Prova Pratica e teórica",
          'assuntos': `- criando um projeto react
          - estilização scss
          - Navegação entre telas
          - variaveis de estado
          - renderização de lista
          - componentes`,
          "data": "01/jan",
          "status": " ",
          "entregaTrab": true
        },
        {
          "titulo": "componentes",
          'assuntos': '- objetos e listas de objetos',
          "data": "01/jan",
          "status": "Evento",
          "entregaTrab": true
        }
      ]

    res.status(200).send(cards)
});

server.listen(port, () => console.log(`Executando na porta ${port}`))