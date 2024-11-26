import React, { useState } from 'react'
import './VendaHistorico.css'

function VendaHistorico(props) {
  
  
  return (
    
      <div className='componente-produto-estoque'>
        <div className='produtos-componente'>

        <div className="div-vendaID">
            
            <label htmlFor="">Venda ID:</label>
            <span className='spanDados'>{'001'}</span>

        </div>
        <div className="div-data">
            
            <label htmlFor="">Data:</label>
            <span className='spanDados'>{'26/11/2024'}</span>

        </div>
        <div className="div-valor">
            
            <label htmlFor="">Valor:</label>
            <span className='spanDados'>{'1.299.000'}</span>

        </div>
        <div className="div-produtoID">
            
            <label htmlFor="">Produto ID:</label>
            <span className='spanDados'>{'0001'}</span>

        </div>
        <div className="div-funcionarioID">
            
            <label htmlFor="">Func. ID:</label>
            <span className='spanDados'>{'0001'}</span>

        </div>
        <div className="div-funcionarioID"><span className='spanDados'>{}</span></div>
        
       

        </div>
      </div>
    
  )
}

export default VendaHistorico
