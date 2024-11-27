import React from 'react'
import './Historico.css'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import VendaHistorico from '../components/VendaHistorico'

function Historico() {
  const { historico } = useContext(GlobalContext)

  return (
    <div className='historico-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-historico'>

          <label title='titulo' className='titulo-Historico' htmlFor="">Histórico de Vendas 🧾</label>

          <div className="dadosHistorico">

            

            <div className='componente-VendaHistorico'>

            {
                historico.map((p) => (
                  <VendaHistorico historico ={p} />
                ))
              }
                
             
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Historico
