import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';

function Button() {
  const {isVisible, setIsVisible} = useContext(GlobalContext);
  const toggleVisibility = () => {
   
setIsVisible(!isVisible);
 };
  return (
    <div className='botao-meta'>
        <button className='botao-meta-element'><img src="imagens/Polygon.png" alt="" onClick={toggleVisibility} /></button>
      
    </div>
  )
}

export default Button
