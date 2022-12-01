import './button.css'
import React, { useState } from 'react'

const Button = ({text, setTextConvert}) => {
    
    const convertText = (text)=>{
        const teste = text.toUpperCase()
        return teste;
    }
        return (
        <button className='btn' id='botao' label="bosta" onClick={()=>setTextConvert(convertText(text)) } > Converter </button>
    )
}

export default Button;