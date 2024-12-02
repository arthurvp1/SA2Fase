import React from 'react'
import './Meta.css'
import GraficoBar from './GraficoBar'

function Meta(props) {
  
  return (
    <div className='meta-container'>


    <GraficoBar  meta = {props.meta}/>
      
    </div>
  )
}

export default Meta
