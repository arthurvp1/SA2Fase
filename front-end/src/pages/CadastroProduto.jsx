import React from 'react'
import './CadastroProduto.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function CadastroProduto() {

    const { produtos, setProdutos } = useContext(GlobalContext)

    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [anoFabri, setAnoFabri] = useState('')
    const [anoModelo, setAnoModelo] = useState('')
    const [cor, setCor] = useState('')
    const [combustivel, setCombustivel] = useState('')
    const [versao, setVersao] = useState('')
    const [km, setKm] = useState('')
    const [cambio, setCambio] = useState('')
    const [preco, setPreco] = useState('')
    const [descri, setDescri] = useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [produtoID, setProdutoID] = useState('')
    let objeto = { 
        marca: '',
        modelo: '',
        anoFabri: '',
        anoModelo: '',
        combustivel: '',
        versao: '',
        km: '',
        cambio: '',
        preco: '',
        localizacao: '',
        
    }
    function limpaInputs(){
        setMarca('')
        setModelo('')
        setAnoFabri('')
        setAnoModelo('')
        setCor('')
        setCombustivel('')
        setVersao('')
        setKm('')
        setCambio('')
        setPreco('')
        setDescri('')
        setLocalizacao('')
        setProdutoID('')
    }

    function cadastrar(){
        if (marca == '' || modelo == '' || anoFabri == '' || anoModelo == '' || cor == '' || combustivel == '' || versao == '' || km == '' || cambio == '' || preco == '' || descri == '' || localizacao == '' || produtoID == '') {
            alert('Preencha todos os campos');
            return;
        }else{

            objeto.marca = marca
            objeto.modelo = modelo
            objeto.anoFabri = anoFabri
            objeto.anoModelo = anoModelo
            objeto.cor = cor
            objeto.combustivel = combustivel
            objeto.versao = versao
            objeto.km = km
            objeto.cambio = cambio
            objeto.preco = preco
            objeto.localizacao = localizacao
            objeto.produtoID = produtoID
            

            alert('Produto cadastrado com sucesso!')
            setProdutos([...produtos, objeto])
            
            limpaInputs()

            return;
        
        }
    }



    return (


        <div className="Cadastrofunc-container">


            <div className='body-container'>

                <div className='div-navbar'>

                    <Navbar />
                </div>

                <div className='cadastro-produtos-container'>
                    <div className='div-tittle'>

                        <h1>Adicionar Produtos</h1>

                    </div>

                    <section className='body-dados'>
                        <div className='container-dados-produto'>
                            <div className='container-dados-produto-esquerda'>
                                <label htmlFor="inp-marca">Marca</label>
                                <input
                                    id='inp-marca'
                                    className='inp-marca'
                                    type="text"
                                    onChange={(e) => setMarca(e.target.value)} />

                                <label htmlFor="inp-anoFabri">Ano Fabriação</label>
                                <input
                                    id='inp-anoFabri'
                                    className='inp-anoFabri'
                                    type="number"
                                    onChange={(e) => setAnoFabri(e.target.value)}
                                />
                                <label htmlFor="inp-cor">Cor</label>
                                <input
                                    id='inp-cor'
                                    className='inp-cor'
                                    type="text"
                                    onChange={(e) => setCor(e.target.value)}
                                />
                                <label htmlFor="inp-preco">Preço</label>
                                <input
                                    id='inp-preco'
                                    className='inp-preco'
                                    type="number"
                                    onChange={(e) => setPreco(e.target.value)}
                                />

                            </div>
                            <div className='container-dados-produto-direita'>
                                <div className='container-dados-produto-direita-cima'>
                                    <div className='container-dados-produto-direita-cima-esquerda'>
                                        <label htmlFor="inp-modelo">Modelo</label>
                                        <input
                                            id='inp-modelo'
                                            className='inp-modelo'
                                            type="text"
                                            onChange={(e) => setModelo(e.target.value)}
                                        />
                                        <label htmlFor="inp-anoModelo">Ano Modelo</label>
                                        <input
                                            id='inp-anoModelo'
                                            className='inp-anoModelo'
                                            type="number"
                                            onChange={(e) => setAnoModelo(e.target.value)}
                                        />
                                        <label htmlFor="inp-combustivel">Combustivel</label>
                                        <input
                                            id='inp-combustivel'
                                            className='inp-combustivel'
                                            type="text"
                                            onChange={(e) => setCombustivel(e.target.value)}
                                        />

                                    </div>
                                    <div className='container-dados-produto-direita-cima-direita'>
                                        <label htmlFor="inp-versao">Versao</label>
                                        <input
                                            id='inp-versao'
                                            className='inp-versao'
                                            type="text"
                                            onChange={(e) => setVersao(e.target.value)}

                                        />
                                        <label htmlFor="inp-km">Kilometragem</label>
                                        <input
                                            id='inp-km'
                                            className='inp-km'
                                            type="number"
                                            onChange={(e) => setKm(e.target.value)}
                                        />
                                        <label htmlFor="inp-cambio">Câmbio</label>
                                        <input
                                            id='inp-cambio'
                                            className='inp-cambio'
                                            type="text"
                                            onChange={(e) => setCambio(e.target.value)}
                                        />

                                    </div>

                                </div>
                                <div className='container-dados-produto-direita-baixo'>

                                    <label htmlFor="">Descriçao</label>
                                    <input
                                        id='inp-descri'
                                        className='inp-descri'
                                        type="text"
                                        onChange={(e) => setDescri(e.target.value)}
                                    />
                                    <label htmlFor="">Localização</label>
                                    <input
                                        id='inp-local'
                                        className='inp-local'
                                        type="text"
                                        onChange={(e) => setLocalizacao(e.target.value)}
                                    />


                                </div>

                            </div>

                        </div>
                        <div className='bot'>
                            <label htmlFor="inp-produtoID">id Produto</label>
                            <input
                                id='inp-produtoID'
                                className='inp-produtoID'
                                type="text"
                                onChange={(e) => setProdutoID(e.target.value)}
                            />
                            <button className='but-cadastro' onClick={cadastrar}>Comfirma</button>

                        </div>
                        {
                            console.log(marca, modelo, anoFabri, anoModelo, cor, combustivel, versao, km, cambio, preco, descri, localizacao, produtoID)
                        }


                    </section>

                </div>
            </div>
        </div>
    )
}

export default CadastroProduto
