import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [funcionarios, setFuncionarios] = useState([{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },{
        nome: 'Luiz Filipe Oliveira',
        email: 'filipefln@gmail.com',
        fone: '48991836492',
        cpf: '99898789878',
        meta: 10
    },
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
    let usuarioLogado = 'Arthur'


    return (
        <GlobalContext.Provider value={{ usuarioLogado, isVisible, setIsVisible, produtos, setProdutos, funcionarios, setFuncionarios }}>
            {children}
        </GlobalContext.Provider>
    )
}
