import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import "./Home.css"
function Home() {
    const {usuarioLogado} = useContext(GlobalContext)
 

  return (
    <div className="container-home">
        <Navbar />
      <h1>Página home do site</h1>
      <p>Olá {usuarioLogado}</p>

    </div>
  )
}

export default Home
