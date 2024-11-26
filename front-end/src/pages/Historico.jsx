import React from 'react'
import './Historico.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Historico() {
  const { produtos } = useContext(GlobalContext)

  return (
    <div className='maisVendidos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-maisVendidos'>

          <label title='titulo' className='titulo-Estoque' htmlFor="">Estoque</label>

          <div className="dadosEstoque">

            <div className='header-estoque'>

              <label htmlFor="">Marca</label>
              <label htmlFor="">Modelo</label>
              <label htmlFor="">Ano</label>
              <label htmlFor="">Km</label>
              <label htmlFor="">Cor</label>
              <label htmlFor="">ID</label>
              <label htmlFor="">Status</label>

            </div>

            <div className='componente-produtoEstoque'>

             
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Historico
