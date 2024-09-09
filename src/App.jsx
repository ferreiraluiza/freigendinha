import './App.scss';



export default function App() {
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

  return (
    <div className="App">
      <header className='cabecaralho'>
        <img src="/assets/images/imagezin.png" alt="" />
        <p className='text'>Atividade</p>
      </header>

      <div className='cards'>
        {
          cards.map(c =>
              <Card
              titulo={c.titulo}
              assuntos={c.assuntos}
              data={c.data}
              status={c.status}
              entregaTrab={c.entregaTrab}
            />

          )
        }
      </div>
    </div>


  );
}


function Card({titulo, assuntos, data, entregaTrab, status}){

let corPrimaria = ""
let corSegundaria = ""

switch (status) {
  case 'completo':
    corPrimaria =  '#A3E5BA'
    corSegundaria = '#EFFBE2'
   break;

   case 'Em andamento':
     corPrimaria = '#DCA3E5'
     corSegundaria = '#EDE2FB'
    break;
  
    case 'Evento':
     corPrimaria = '#F6E448';
     corSegundaria = '#FAF4C1';
    break;

  default:
     corPrimaria = '#C3C3C3';
     corSegundaria = '#F2F2F2';
    break;
      
}

  return(
    <div className='card' style={{ backgroundColor: corSegundaria }}>
                    <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
                        <h2>{titulo}</h2>
                    </div>
                    <div className='card-conteudo'>
                        <h3>Assuntos</h3>
                        <pre>
                            {assuntos}
                        </pre>
                    </div>
                    <p className='tag'>{data}</p>
                  {entregaTrab && <p className='tag'>entrega trab.</p>}
                </div>
  )
}