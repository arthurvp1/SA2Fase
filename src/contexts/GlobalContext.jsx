import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
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
        <GlobalContext.Provider value={{ usuarioLogado,isVisible, setIsVisible,produtos,setProdutos }}>
            {children}
        </GlobalContext.Provider>
    )
}
