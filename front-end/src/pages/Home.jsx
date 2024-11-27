import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import "./Home.css"
import ColunaBar from "../components/ColunaBar"
import RadialBar from "../components/RadialBar"
import LineBar from "../components/LineBar"


function Home() {

  const { usuarioLogado } = useContext(GlobalContext)


  return (

    <div className='home-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-home'>

          <h1 className="h1-home">Página home do site</h1>
          <div className="colunabar">
          <LineBar />
          {/* <ColunaBar /> */}
          {/* <RadialBar /> */}

          </div>
        </div>

      </div>
    </div>

  )
}

export default Home
