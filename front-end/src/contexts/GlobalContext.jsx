import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [funcionarios, setFuncionarios] = useState([{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 100
    }
    ])


    const [produtos, setProdutos] = useState([])

    const [historico, setHistorico] = useState([
        {
            vendaID: '1',
            data: '27/11/2024',
            valor:'1.299.000',
            produtoID: '1',
            funcionarioID:'1'
        }
    
        
        
    ])
    
    let usuarioLogado = 'Arthur'


    return (
        <GlobalContext.Provider value={{ usuarioLogado, isVisible, setIsVisible, produtos, setProdutos, funcionarios, setFuncionarios,visible, setVisible, historico, setHistorico }}>
            {children}
        </GlobalContext.Provider>
    )
}
