import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-navbar">
        <div className="icon-navbar">
          <img src="./public/imagens/icon2.png" alt="" />
        </div>
      </div>
      <div className="div-label-navbar">
        <h2>Sale<span className="span-navbar">Sigth</span></h2>
      </div>

      <nav className="navbar">

        <div className="inicio">
          <Link to="/"><img src="./imagens/Group 2.png" /> Inicio</Link>
        </div>

        <div className="desempenho">
          <Link to="/desempenho"><img src="./imagens/TrendUp.png" />Desempenho</Link>
        </div>

        <div className="produtos">
          <Link to="/produtos"><img src="./imagens/CirclesFour.png" />Produtos</Link>
        </div>

        <div className="vendidos">
          <Link to="/maisVendidos"> <img src="./imagens/directions_car.png" alt="" />Mais Vendidos</Link>
        </div>

        <div className="cadastro">
          <Link to="/cadastroFunc"><img src="./imagens/Settings.png" alt="" />Cad Func</Link>
        </div>

        <div className="logout">
          <Link to="/login"><img src="./imagens/Log out.png" alt="" />Log Out</Link>
        </div>

      </nav>

    </div>
  )
}

export default Navbar
