import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";

import CadastroFunc from "../pages/CadastroFunc";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";
import MaisVendidos from "../pages/MaisVendidos";
import Desempenho from "../pages/Desempenho";
import Config from "../pages/Config";
import AlterarCad from "../pages/AlterarCad";
import CadastroProduto from "../pages/CadastroProduto";
import Historico from "../pages/Historico";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/maisVendidos", element: <MaisVendidos/>},
    {path: "/gerenFunc", element: <AlterarCad />},
    {path: "/cadastroFunc", element: <CadastroFunc />},
    {path: "/config", element: <Config />},
    {path: "/login", element: <Login />},
    {path: "/produtos", element: <Produtos />},
    {path: "/desempenho", element: <Desempenho />},
    {path: "/cadProduto", element: <CadastroProduto />},
    {path: "/historico", element: <Historico/>},

    
])

export default router;
