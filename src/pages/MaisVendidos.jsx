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

      <h2>Mais Vendidos</h2>
      </div>

      </div>
    </div>
  )
}

export default MaisVendidos
