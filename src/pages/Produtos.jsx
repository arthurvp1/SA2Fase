import React from 'react'
import './Produtos.css'
import Navbar from '../components/Navbar'
import Produto from '../components/Produto'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Link } from 'react-router-dom'

function Produtos() {
  const { produtos, setProdutos } = useContext(GlobalContext)
  return (
    <div className='produtos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-produtos'>
          {/* <Produto marca='Porche' modelo='911' versao='3.0 24V  GASOLINA CARRERA S 
PDK' preco='1.299.900' ano='2023/2024' km='0' localizacao='Balneário Camburiú - SC' /> */}
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
