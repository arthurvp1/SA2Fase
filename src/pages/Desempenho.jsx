import React from 'react'
import './Desempenho.css'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { useState } from 'react'
import Button2 from '../components/Button2'

function Desempenho() {
   const [isVisible, setIsVisible] = useState(false);
   const toggleVisibility = () => {
    
setIsVisible(!isVisible);
  };
  return (

    <div className='desempenho-container'>

      <div className='body-container'>
        <div className='div-navbar'>
          <Navbar />
        </div>
        <div className='body-desempenho'>

          <label className='titulo-funcionarios'>Funcionários</label>

          <section className='perfil1'>

            <div className='foto'>
              <label htmlFor="">img n carrega</label>
            </div>

            <div className='perfil-text'>

              <div className='perfil-text-encima'>

                <label>Nome</label>
                <label>Email</label>
                <label>Numero</label>
                <label>CPF</label>

              </div>

              <div className='perfil-text-embaixo'>

                <label>Arthur Viecili</label>
                <label>arthur@salesigth.com</label>
                <label>48998092078</label>
                <label>04626034071</label>


              </div>


            </div>

            <div className='botao-meta'>
              
              <button className='botao-meta-element' onClick={toggleVisibility}>{isVisible && <Button />} {!isVisible && <Button2/>}</button>
              
            </div>

          </section>

        </div>

      </div>
    </div>


  )
}

export default Desempenho
