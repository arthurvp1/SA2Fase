import React from 'react'
import './Desempenho.css'
import Navbar from '../components/Navbar'
import { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Funcionario from '../components/Funcionario'

function Desempenho() {
  const {isVisible, setIsVisible} = useContext(GlobalContext);
  
  return (

    <div className='desempenho-container'>

      <div className='body-container'>
        <div className='div-navbar'>
          <Navbar />
        </div>
        <div className='body-desempenho'>

          <label className='titulo-funcionarios'>Funcionários</label>

          <div className="div-funcionarios">
          <Funcionario img={'imgn n carrega'} nome ={'Luiz Filipe oliveira'} email = {'filipefln@gmail.com'} fone = {'048991836492'} cpf = {'98989889989'}/>
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          <Funcionario />
          </div>
          
        </div>

      </div>
    </div>


  )
}

export default Desempenho
