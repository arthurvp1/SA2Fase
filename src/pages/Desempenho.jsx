import React from 'react'
import './Desempenho.css'
import Navbar from '../components/Navbar'

function Desempenho() {
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


          </section>

            <div className='botao-meta'>
                <button className='botao-meta-element'>Ola</button>
            </div>
        </div>

      </div>
    </div>


  )
}

export default Desempenho
