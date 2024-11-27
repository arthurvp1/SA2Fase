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
        meta: 10
    }
    ])


    const [produtos, setProdutos] = useState([
        {
            marca: 'Porche',
            modelo: '911',
            versao: '3.0 24V CARRERA S ',
            combustivel: 'Gasolina',
            cambio: 'PDK',
            preco: '1.299.900',
            anoFabri: '2023',
            anoModelo: '2024',
            km: '0',
            localizacao: 'Balneário Camburiú - SC',
            cor:  'Branco',
            produtoID: '1'
        },
        
    ])
    const [historico, setHistorico] = useState([
        {
            vendaID: '1',
            data: '27/11/2024',
            valor:'1.299.000',
            produtoID: '1',
            funcionarioID:'1'
        },
    
            {
                "vendaID": "1",
                "data": "27/11/2024",
                "valor": "1.299.000",
                "produtoID": "1",
                "funcionarioID": "1"
            },
            {
                "vendaID": "2",
                "data": "25/11/2024",
                "valor": "799.000",
                "produtoID": "2",
                "funcionarioID": "3"
            },
            {
                "vendaID": "3",
                "data": "23/11/2024",
                "valor": "1.450.000",
                "produtoID": "1",
                "funcionarioID": "2"
            },
            {
                "vendaID": "4",
                "data": "20/11/2024",
                "valor": "650.000",
                "produtoID": "4",
                "funcionarioID": "4"
            },
            {
                "vendaID": "5",
                "data": "19/11/2024",
                "valor": "1.000.000",
                "produtoID": "3",
                "funcionarioID": "5"
            },
            {
                "vendaID": "6",
                "data": "18/11/2024",
                "valor": "950.000",
                "produtoID": "2",
                "funcionarioID": "1"
            },
            {
                "vendaID": "7",
                "data": "17/11/2024",
                "valor": "1.750.000",
                "produtoID": "1",
                "funcionarioID": "6"
            },
            {
                "vendaID": "8",
                "data": "15/11/2024",
                "valor": "850.000",
                "produtoID": "4",
                "funcionarioID": "7"
            },
            {
                "vendaID": "9",
                "data": "13/11/2024",
                "valor": "1.100.000",
                "produtoID": "5",
                "funcionarioID": "2"
            },
            {
                "vendaID": "10",
                "data": "12/11/2024",
                "valor": "1.350.000",
                "produtoID": "3",
                "funcionarioID": "8"
            },
            {
                "vendaID": "11",
                "data": "11/11/2024",
                "valor": "950.000",
                "produtoID": "1",
                "funcionarioID": "5"
            },
            {
                "vendaID": "12",
                "data": "10/11/2024",
                "valor": "800.000",
                "produtoID": "2",
                "funcionarioID": "9"
            },
            {
                "vendaID": "13",
                "data": "09/11/2024",
                "valor": "1.200.000",
                "produtoID": "4",
                "funcionarioID": "3"
            },
            {
                "vendaID": "14",
                "data": "08/11/2024",
                "valor": "1.600.000",
                "produtoID": "1",
                "funcionarioID": "6"
            },
            {
                "vendaID": "15",
                "data": "07/11/2024",
                "valor": "1.100.000",
                "produtoID": "5",
                "funcionarioID": "4"
            },
            {
                "vendaID": "16",
                "data": "06/11/2024",
                "valor": "1.300.000",
                "produtoID": "2",
                "funcionarioID": "7"
            },
            {
                "vendaID": "17",
                "data": "05/11/2024",
                "valor": "1.400.000",
                "produtoID": "3",
                "funcionarioID": "1"
            },
            {
                "vendaID": "18",
                "data": "04/11/2024",
                "valor": "800.000",
                "produtoID": "4",
                "funcionarioID": "2"
            },
            {
                "vendaID": "19",
                "data": "03/11/2024",
                "valor": "1.600.000",
                "produtoID": "1",
                "funcionarioID": "3"
            },
            {
                "vendaID": "20",
                "data": "02/11/2024",
                "valor": "850.000",
                "produtoID": "2",
                "funcionarioID": "5"
            },
            {
                "vendaID": "21",
                "data": "01/11/2024",
                "valor": "900.000",
                "produtoID": "3",
                "funcionarioID": "2"
            },
            {
                "vendaID": "22",
                "data": "31/10/2024",
                "valor": "1.700.000",
                "produtoID": "4",
                "funcionarioID": "1"
            },
            {
                "vendaID": "23",
                "data": "30/10/2024",
                "valor": "1.250.000",
                "produtoID": "1",
                "funcionarioID": "3"
            },
            {
                "vendaID": "24",
                "data": "29/10/2024",
                "valor": "1.500.000",
                "produtoID": "2",
                "funcionarioID": "4"
            },
            {
                "vendaID": "25",
                "data": "28/10/2024",
                "valor": "650.000",
                "produtoID": "3",
                "funcionarioID": "5"
            },
            {
                "vendaID": "26",
                "data": "27/10/2024",
                "valor": "1.200.000",
                "produtoID": "4",
                "funcionarioID": "6"
            },
            {
                "vendaID": "27",
                "data": "26/10/2024",
                "valor": "1.350.000",
                "produtoID": "1",
                "funcionarioID": "7"
            },
            {
                "vendaID": "28",
                "data": "25/10/2024",
                "valor": "1.100.000",
                "produtoID": "5",
                "funcionarioID": "8"
            },
            {
                "vendaID": "29",
                "data": "24/10/2024",
                "valor": "850.000",
                "produtoID": "2",
                "funcionarioID": "9"
            },
            {
                "vendaID": "30",
                "data": "23/10/2024",
                "valor": "1.450.000",
                "produtoID": "3",
                "funcionarioID": "2"
            },
            {
                "vendaID": "31",
                "data": "22/10/2024",
                "valor": "1.300.000",
                "produtoID": "4",
                "funcionarioID": "1"
            },
            {
                "vendaID": "32",
                "data": "21/10/2024",
                "valor": "950.000",
                "produtoID": "1",
                "funcionarioID": "3"
            },
            {
                "vendaID": "33",
                "data": "20/10/2024",
                "valor": "1.600.000",
                "produtoID": "2",
                "funcionarioID": "4"
            },
            {
                "vendaID": "34",
                "data": "19/10/2024",
                "valor": "1.200.000",
                "produtoID": "5",
                "funcionarioID": "2"
            },
            {
                "vendaID": "35",
                "data": "18/10/2024",
                "valor": "1.350.000",
                "produtoID": "3",
                "funcionarioID": "6"
            },
            {
                "vendaID": "36",
                "data": "17/10/2024",
                "valor": "850.000",
                "produtoID": "4",
                "funcionarioID": "7"
            },
            {
                "vendaID": "37",
                "data": "16/10/2024",
                "valor": "1.450.000",
                "produtoID": "1",
                "funcionarioID": "8"
            },
            {
                "vendaID": "38",
                "data": "15/10/2024",
                "valor": "1.700.000",
                "produtoID": "2",
                "funcionarioID": "9"
            },
            {
                "vendaID": "39",
                "data": "14/10/2024",
                "valor": "1.000.000",
                "produtoID": "3",
                "funcionarioID": "5"
            },
            {
                "vendaID": "40",
                "data": "13/10/2024",
                "valor": "1.100.000",
                "produtoID": "4",
                "funcionarioID": "1"
            },
        
        
        
    ])
    
    let usuarioLogado = 'Arthur'


    return (
        <GlobalContext.Provider value={{ usuarioLogado, isVisible, setIsVisible, produtos, setProdutos, funcionarios, setFuncionarios,visible, setVisible, historico, setHistorico }}>
            {children}
        </GlobalContext.Provider>
    )
}
