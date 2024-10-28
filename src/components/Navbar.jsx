import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/cadastroFunc">Funcionarios</Link>
        <Link to="/login">Login</Link>
        <Link to="/produtos">Produtos</Link>
    </nav>
  )
}

export default Navbar
