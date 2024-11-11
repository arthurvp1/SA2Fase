import React from 'react'
import './Produtos.css'
import Navbar from '../components/Navbar'
function Produtos() {
  return (
    <div className='produtos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-produtos'>

          <div className='add-produto'>
            <div className='add-produto-img'>
              <img src='./public/imagens/add-produto.png' alt='Toggle' />
            </div>
            <div className='produto-but'>
              <button className='but-add-produto'>Adicionar Produto</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produtos
