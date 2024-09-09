import { useState } from 'react';
import './App.scss';
import axios from "axios";


export default function App() {
  const [cards, setcards] = useState([]);

  async function listarcards(){
    const resposta = await axios.get('http://localhost:3001/cards')
    setcards(resposta.data)
  }

  return (
    <div className="App">
      <header className='cabecaralho'>
        <img src="/assets/images/imagezin.png" alt="" />
        <p className='text'>Atividade</p>
      </header>
      <button onClick={listarcards}>hello world</button>
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