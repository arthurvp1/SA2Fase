import React, { useState } from 'react'
import './ProdutoEstoque.css'

function ProdutoEstoque() {
  const [btnStatus, setBtnStatus] = useState('btnStatus1')
  const [btnEscrita, setBtnEscrita] = useState('Disponivel')

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
    
        <div className='produtos-componente'>

        <div className="div-marca"><span className='spanDados'>PORSCHE</span></div>
        <div className="div-modelo"><span className='spanDados'>911</span></div>
        <div className="div-ano"><span className='spanDados'>2023/24</span></div>
        <div className="div-km"><span className='spanDados'>0</span></div>
        <div className="div-cor"><span className='spanDados'>preto</span></div>
        <div className="div-id"><span className='spanDados'>0001</span></div>
        <div className="div-status"><button className={btnStatus} onClick={alteratBtnStatus}>{btnEscrita}</button></div>

        </div>
      
    
  )
}

export default ProdutoEstoque
