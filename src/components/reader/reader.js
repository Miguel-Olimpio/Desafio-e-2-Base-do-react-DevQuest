import React, { useState } from 'react'
import './reader.css'

const Reader = ({setText, text}) => {
    
const showFormatedText = () => {
    const text = document.getElementById('text')
    const formatedText = text.value
    return formatedText;
  }
    return(
        <div>
            <textarea  id='text' value={text} className='texto' cols="30" rows="5" type="text" onChange={()=>setText(showFormatedText())}  placeholder="Digite aqui o texto a ser convertido..." />
        </div>
    )
}

export default Reader;