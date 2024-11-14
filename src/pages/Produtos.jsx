import React from 'react'
import './Produtos.css'
import Navbar from '../components/Navbar'
import Produto from '../components/Produto'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Link } from 'react-router-dom'

function Produtos() {
  const { produtos } = useContext(GlobalContext)
  return (
    <div className='produtos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-produtos'>
          {
            produtos.map((p) => (
               <Produto produto={p} />
            ))
          }
          <div className='add-produto'>
            <div className='add-produto-img'>
              <img src='./public/imagens/add-produto.png' alt='Toggle' />
            </div>
            <div className='produto-but'>
              <Link to = '/cadProduto'>

              <button className='but-add-produto'>Adicionar Produto</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produtos
