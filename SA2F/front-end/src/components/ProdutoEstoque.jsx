import React, { useState } from 'react'
import './ProdutoEstoque.css'

function ProdutoEstoque(props) {
  const [btnStatus, setBtnStatus] = useState('btnStatus1')
  const [btnEscrita, setBtnEscrita] = useState('Disponivel')

  let estoque = props.estoque

  function alteratBtnStatus() {
    
    if(btnStatus === 'btnStatus2'){
      setBtnEscrita('Disponível')
      setBtnStatus('btnStatus1')
    }
    if(btnStatus === 'btnStatus1') {
      setBtnEscrita('Reservado')
      setBtnStatus('btnStatus2')
    }
  }
  return (
    
      <div className='componente-produto-estoque'>
        <div className='produtos-componente'>

        <div className="div-marca"><span className='spanDados'>{estoque.marca}</span></div>
        <div className="div-modelo"><span className='spanDados'>{estoque.modelo}</span></div>
        <div className="div-ano"><span className='spanDados'>{estoque.ano_modelo}</span></div>
        <div className="div-km"><span className='spanDados'>{estoque.km}</span></div>
        <div className="div-cor"><span className='spanDados'>{estoque.cor}</span></div>
        <div className="div-id"><span className='spanDados'>{estoque.idp}</span></div>
        <div className="div-status"><button className={btnStatus} onClick={alteratBtnStatus}>{btnEscrita}</button></div>

        </div>
      </div>
    
  )
}

export default ProdutoEstoque
