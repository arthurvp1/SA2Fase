import React from 'react'
import './MaisVendidos.css'
import Navbar from '../components/Navbar'

function MaisVendidos() {
  return (
    <div className='maisVendidos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-maisVendidos'>

          <label title='titulo' className='titulo-Estoque' htmlFor="">Estoque</label>
          
          <div className="dadosEstoque">


            <div className='div-marcas'>

              <label className='lblDados'>Marca</label>

              <label>avava</label>
            </div>
            <div className='div-modelos'>

              <label className='lblDados' htmlFor="">Modelo</label>
            </div>
            <div className='div-ano'>

              <label className='lblDados' htmlFor="">Ano</label>
            </div>
            <div className='div-km'>

              <label className='lblDados' htmlFor="">Km</label>
            </div>
            <div className='div-cor'>

              <label className='lblDados' htmlFor="">Cor</label>
            </div>
            <div className='div-ID'>

              <label className='lblDados' htmlFor="">ID</label>
            </div>
            <div className='div-status'>

              <label className='lblDados' htmlFor="">Status</label>
            </div>


          </div>


        </div>

      </div>
    </div>
  )
}

export default MaisVendidos
