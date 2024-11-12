import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [funcionarios, setFuncionarios] = useState([{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
    }
])
        
    const [produtos,setProdutos] = useState([
        {
        marca: 'Porche',
        modelo: '911',
        versao: '3.0 24V  GASOLINA CARRERA S PDK',
        preco: '1.299.900',
        ano: '2023/2024',
        km: '0',
        localizacao: 'Balneário Camburiú - SC'
        }
])
    let usuarioLogado = 'Joabe'


    return (
        <GlobalContext.Provider value={{ usuarioLogado,isVisible, setIsVisible,produtos,setProdutos,funcionarios, setFuncionarios }}>
            {children}
        </GlobalContext.Provider>
    )
}
