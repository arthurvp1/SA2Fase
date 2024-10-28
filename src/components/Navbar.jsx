import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="icon-navbar">
        <img src="./public/imagens/icon2.png" alt="" />
      </div>
      <div className="div-label-navbar">
        <h2>Sale<span className="span-navbar">Sigth</span></h2>
      </div>
        

    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/cadastroFunc">Funcionarios</Link>
        <Link to="/login">Login</Link>
        <Link to="/produtos">Produtos</Link>
    </nav>

    </div>
  )
}

export default Navbar
