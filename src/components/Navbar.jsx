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
          <Link to="/">

            <div className="iconesidebar">
              <img src="./imagens/Group 2.png" alt="Início" />
            </div>
            
            <div className="textsidebar">Início</div>

          </Link>
        </div>

        <div className="desempenho">
          <Link to="/desempenho">
            <div className="iconesidebar">
              <img src="./imagens/TrendUp.png" alt="Desempenho" />
            </div>
            <div className="textsidebar">Funcionários</div>
          </Link>
        </div>

        <div className="produtos">
          <Link to="/produtos">
            <div className="iconesidebar">
              <img src="./imagens/CirclesFour.png" alt="Produtos" />
            </div>
            <div className="textsidebar">Produtos</div>
          </Link>
        </div>

        <div className="vendidos">
          <Link to="/maisVendidos">
            <div className="iconesidebar">
              <img src="./imagens/directions_car.png" alt="Mais Vendidos" />
            </div>
            <div className="textsidebar">Mais Vendidos</div>
          </Link>
        </div>

        <div className="config">
          <Link to="/config">
            <div className="iconesidebar">
              <img src="./imagens/Settings.png" alt="Cad Func" />
            </div>
            <div className="textsidebar">Configurações</div>
          </Link>
        </div>

        <div className="logout">
          <Link to="/login">
            <div className="iconesidebar">
              <img src="./imagens/Log out.png" alt="Log Out" />
            </div>
            <div className="textsidebar">Log Out</div>
          </Link>
        </div>

      </nav>

    </div>
  )
}

export default Navbar
