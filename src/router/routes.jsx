import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";

import CadastroFunc from "../pages/CadastroFunc";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";
import MaisVendidos from "../pages/MaisVendidos";
import Desempenho from "../pages/Desempenho";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/maisVendidos", element: <MaisVendidos/>},
    {path: "/cadastrofunc", element: <CadastroFunc />},
    {path: "/login", element: <Login />},
    {path: "/produtos", element: <Produtos />},
    {path: "/desempenho", element: <Desempenho />},


    
])

export default router;
