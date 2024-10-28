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
        <Link to="/">Inicio</Link>
        <Link to="/desempenho">Desempenho</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/maisVendidos">Mais Vendidos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/cadastroFunc">Cad Func</Link>
        <Link to="/login">Log Out</Link>
      </nav>

    </div>
  )
}

export default Navbar
