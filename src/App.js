import React, { useState } from 'react'
import Reader from './components/reader/reader';
import Button from './components/button/button';
import Coloring from './components/coloring/coloring';
import Formattedtext from './components/formattedtext/formattedtext'
import Button2 from './components/desafio-2/desafio-02';
import './App.css';

function App() {

  const [color,setColor] = useState('none')
  const [text,setText] = useState('')
  const [textConvert,setTextConvert] = useState('')
  
  return (
    <div className="App">
      
      <h3>Digite o texto abaixo:</h3>
      <Reader setText={setText} text={text} />
      <div>           
        <Coloring color={color} setColor={setColor} />
        <Button text={text} textConvert={textConvert} setTextConvert={setTextConvert} />
        <Button2 label="Desafio 2"/>
      </div>
      <Formattedtext color={color} textConvert={textConvert} />
    
    </div>
  );
  
}

export default App;
