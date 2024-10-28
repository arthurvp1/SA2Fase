import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import CadastroFunc from "../pages/CadastroFunc";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/cadastrofunc", element: <CadastroFunc />},
    {path: "/login", element: <Login />},
    {path: "/produtos", element: <Produtos />},
])

export default router;
