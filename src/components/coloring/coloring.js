import './coloring.css'
import React, { useState } from 'react'
import Options from '../options/options'



const Coloring = ({setColor ,color}) => {

    const showOptionColor = () => {
        const select = document.getElementById('select')
        const selected = select.options[select.selectedIndex].className
        return selected;
      }    

return(
    <select id='select' style={{backgroundColor: color }} className='cor' onChange={()=>setColor(showOptionColor())} >
        <Options />
    </select>
)   
}


export default Coloring;