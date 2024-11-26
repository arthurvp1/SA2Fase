import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import "./Home.css"
import ColunaBar from "../components/ColunaBar"


function Home() {

  const { usuarioLogado } = useContext(GlobalContext)


  return (

    <div className='home-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-home'>

          <h1>Página home do site</h1>
          <p>Olá {usuarioLogado}</p>
          <div className="colunabar">
          <ColunaBar />

          </div>
        </div>

      </div>
    </div>

  )
}

export default Home
