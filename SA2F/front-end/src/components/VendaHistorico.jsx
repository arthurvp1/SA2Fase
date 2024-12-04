import React, { useState } from 'react'
import './VendaHistorico.css'

function VendaHistorico(props) {
  
    let historico = props.historico

  
  return (
    
      <div className='componente-produto-estoque'>
        <div className='produtos-componente'>

        <div className="div-vendaID">
            
            <label htmlFor="">Venda ID:</label>
            <span className='spanDados'>{historico.vendaID}</span>

        </div>
        <div className="div-data">
            
            <label htmlFor="">Data:</label>
            <span className='spanDados'>{historico.data}</span>

        </div>
        <div className="div-valor">
            
            <label htmlFor="">Valor:</label>
            <span className='spanDados'>{historico.valor}</span>

        </div>
        <div className="div-produtoID">
            
            <label htmlFor="">Produto ID:</label>
            <span className='spanDados'>{historico.produtoID}</span>

        </div>
        <div className="div-funcionarioID">
            
            <label htmlFor="">Func. ID:</label>
            <span className='spanDados'>{historico.funcionarioID}</span>

        </div>
        
        
       

        </div>
      </div>
    
  )
}

export default VendaHistorico
