import React, { useContext, useState } from 'react'
// import { GlobalContext } from '../contexts/GlobalContext';
import './Button.css'

function Button() {
  const [ imgbut, setImgbut] = useState("imagens/Polygon.png");
  const [imgButton, setImgButton] = useState(false)
    
    

    
    const toggleVisibility = () => {

      if(imgButton === true){
        setImgbut("imagens/Polygon.png")

      }else{
        setImgbut("imagens/Polygon 2.png")
      }

        setImgButton(!imgButton);

    }
  return (
    <div className='botao-meta'>
        <button className='botao-meta-element'><img src={imgbut}alt="Toggle" onClick={toggleVisibility} /></button>
      
    </div>
  )
  }

export default Button
