import './desafio-02.css'


const Button2 = ({label}) => {
    
    const desafio02 = (label)=>{
        return alert('A label deste botão é ' + label);
        
    }
        return (
        <button className='btn2' onClick={()=>desafio02(label)}>{label}</button>
    )
}

export default Button2;