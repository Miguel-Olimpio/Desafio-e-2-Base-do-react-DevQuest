import './formattedtext.css'
import Reader from '../reader/reader'
import React, { useState } from 'react'

const Formattedtext = ({color, textConvert}) => {
    
    return(
    <div className="formattedtext" style={{backgroundColor: color }}>
        {textConvert}
    </div>
    )

}

export default Formattedtext;