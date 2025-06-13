import { useState } from 'react'
import './style.css'


export default function App() {
 const[mundo, setMundo] = useState('Juntos, podemos construir um futuro mais justo, sustentável e feliz para todos.')

 function trocar () {
  if(mundo === 'O planeta é a nossa casa, cuidemos dela com amor e respeito'){
    setMundo('Juntos, podemos construir um futuro mais justo, sustentável e feliz para todos.')
    }else{
      setMundo('O planeta é a nossa casa, cuidemos dela com amor e respeito')
    }
 }

  return(
    
      
    <div className="começo">

     <div className="titulo">
        <img src="./planeta-terra.jpg" alt="terra" className='terra' />
        <h1>Salve o mundo!</h1>
      </div>

     <div className="texto1">
      <h1>Como ajudar o planeta terra?🌎</h1>
      <li>Para ajudar o planeta, podemos adotar diversas práticas simples no dia a dia, como economizar energia e água, reduzir o consumo de plástico, reciclar e reaproveitar materiais, consumir produtos locais e de acordo com a época, e reduzir a pegada de carbono através de escolhas de transporte e alimentação</li>
      
      
     </div>

     <div className='texto2'>
      <li>O que prejudica o nosso planeta terra?<p>Diversos fatores podem prejudicar o planeta Terra, como a poluição do ar, água e solo, desmatamento, extinção de espécies, superpopulação, aquecimento global e mudanças climáticas. O excesso de consumo, a exploração desenfreada de recursos naturais e o uso irresponsável de água e energia também contribuem para a degradação ambiental. </p></li>
     </div>

     <div className='titulo3'>
      <h1>Como evitar a poluião ambiental?</h1>
      <li>Para evitar a poluição ambiental, é importante adotar práticas sustentáveis no dia a dia. Isso inclui reduzir o consumo de energia e água, usar transporte público ou bicicleta em vez de carros, separar o lixo corretamente para reciclagem, evitar o uso de produtos químicos agressivos e optar por alternativas mais amigáveis ao meio ambiente</li>
     </div>

      <img src="./poluicao.jpg" alt="oi" className='img1'/>
    

     <div onClick={trocar} className='texto4'>
      {mundo}
     </div>

      
    </div>
  )
}