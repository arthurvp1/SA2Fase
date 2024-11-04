import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Button2() {
  const {isVisible, setIsVisible} = useContext(GlobalContext);
  const toggleVisibility = () => {
   
setIsVisible(!isVisible);
 };
  return (
    <div className='botao-meta'>
      <button className='botao-meta-element'><img src="imagens/Polygon 2.png" alt="" onClick={toggleVisibility} /></button>
    </div>
  )
}

export default Button2
