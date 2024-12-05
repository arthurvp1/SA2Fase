import React from 'react'
import './Desempenho.css'
import Navbar from '../components/Navbar'
import Funcionario from '../components/Funcionario'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Desempenho() {
  const {funcionarios, setFuncionarios} = useContext(GlobalContext) 
  
  
  return (

    <div className='desempenho-container'>

      <div className='body-container'>
        <div className='div-navbar'>
          <Navbar />
        </div>
        <div className='body-desempenho'>

          <label className='titulo-funcionarios'>Funcionários</label>

          <div className="div-funcionarios">
          {
            funcionarios.map((f) => (
              <Funcionario key={f} funcionario={f} />
            ))
          }

          </div>

        </div>

      </div>
    </div>


  )
}

export default Desempenho
