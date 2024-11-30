import React from 'react'
import './EditarProduto.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { Navigate, useNavigate } from "react-router-dom";

function EditarProduto() {
    const Navigate = useNavigate()


    const { produtos, setProdutos } = useContext(GlobalContext)

    
    const [form, setForm] = useState({
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
        descri: '',
        image: ''

    })
    function excluir() {
        setProdutos(produtos.filter((produto) => produto !== form))
        limpaInputs()
        Navigate("/produtos")
    }
    function limpaInputs() {
        setForm({
            marca: '',
            modelo: '',
            anoFabri: '',
            anoModelo: '',
            cor: '',
            combustivel: '',
            versao: '',
            km: '',
            cambio: '',
            preco: '',
            localizacao: '',
            descri: '',
            image: ''
        })
    }

    function cadastrar() {
        if (form.marca == '' || form.modelo == '' || form.anoFabri == '' || form.anoModelo == '' || form.cor == '' || form.combustivel == '' || form.versao == '' || form.km == '' || form.cambio == '' || form.preco == '' || form.localizacao == ''|| form.descri == '' || form.image == '') {
            alert('Preencha todos os campos');
            return;
        } else {


            alert('Produto cadastrado com sucesso!')

            setProdutos([...produtos, form])
            limpaInputs()

            Navigate("/produtos")

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

                        <h1>Editar Produto</h1>

                    </div>

                    <section className='body-dados'>
                        <div className='container-dados-produto'>
                            <div className='container-dados-produto-esquerda'>
                                <label htmlFor="inp-marca">Marca</label>
                                <input
                                    id='inp-marca'
                                    className='inp-marca'
                                    type="text"
                                    value = {form.marca}
                                    onChange={(e) => setForm({ ...form, marca: e.target.value })} 

                                    />
                                <label htmlFor="inp-anoFabri">Ano Fabriação</label>
                                <input
                                    id='inp-anoFabri'
                                    className='inp-anoFabri'
                                    type="number"
                                    value={form.anoFabri}
                                    onChange={(e) => setForm({ ...form, anoFabri: e.target.value })}

                                />
                                <label htmlFor="inp-cor">Cor</label>
                                <input
                                    id='inp-cor'
                                    className='inp-cor'
                                    type="text"
                                    value={form.cor}
                                    onChange={(e) => setForm({ ...form, cor: e.target.value })}

                                />
                                <label htmlFor="inp-preco">Preço</label>
                                <input
                                    id='inp-preco'
                                    className='inp-preco'
                                    type="number"
                                    value={form.preco}
                                    onChange={(e) => setForm({ ...form, preco: e.target.value })}

                                />

                                <label htmlFor="inp-image">Imagem</label>
                                <input
                                    id='inp-image'
                                    className='inp-image'
                                    type="text"
                                    value={form.image}
                                    onChange={(e) => setForm({ ...form, image: e.target.value })}

                                />


                                {/* criar mais 2 inputs sendo um do link de imagem e outro de id */}

                            </div>
                            <div className='container-dados-produto-direita'>
                                <div className='container-dados-produto-direita-cima'>
                                    <div className='container-dados-produto-direita-cima-esquerda'>
                                        <label htmlFor="inp-modelo">Modelo</label>
                                        <input
                                            id='inp-modelo'
                                            className='inp-modelo'
                                            type="text"
                                            value={form.modelo}
                                            onChange={(e) => setForm({ ...form, modelo: e.target.value })}

                                        />
                                        <label htmlFor="inp-anoModelo">Ano Modelo</label>
                                        <input
                                            id='inp-anoModelo'
                                            className='inp-anoModelo'
                                            type="number"
                                            value={form.anoModelo}
                                            onChange={(e) => setForm({ ...form, anoModelo: e.target.value })}

                                        />
                                        <label htmlFor="inp-combustivel">Combustivel</label>
                                        <input
                                            id='inp-combustivel'
                                            className='inp-combustivel'
                                            type="text"
                                            value={form.combustivel}
                                            onChange={(e) => setForm({ ...form, combustivel: e.target.value })}

                                        />

                                    </div>
                                    <div className='container-dados-produto-direita-cima-direita'>
                                        <label htmlFor="inp-versao">Versao</label>
                                        <input
                                            id='inp-versao'
                                            className='inp-versao'
                                            type="text"
                                            value={form.versao}
                                            onChange={(e) => setForm({ ...form, versao: e.target.value })}


                                        />
                                        <label htmlFor="inp-km">Kilometragem</label>
                                        <input
                                            id='inp-km'
                                            className='inp-km'
                                            type="number"
                                            value={form.km}
                                            onChange={(e) => setForm({ ...form, km: e.target.value })}

                                        />
                                        <label htmlFor="inp-cambio">Câmbio</label>
                                        <input
                                            id='inp-cambio'
                                            className='inp-cambio'
                                            type="text"
                                            value={form.cambio}
                                            onChange={(e) => setForm({ ...form, cambio: e.target.value })}
                                            
                                        />

                                    </div>

                                </div>
                                <div className='container-dados-produto-direita-baixo'>

                                    <label htmlFor="">Localização</label>
                                    <input
                                        id='inp-local'
                                        className='inp-local'
                                        type="text"
                                        value={form.localizacao}
                                        onChange={(e) => setForm({ ...form, localizacao: e.target.value })}

                                    />
                                    <label htmlFor="">Descriçao</label>
                                    <input
                                        id='inp-descri'
                                        className='inp-descri'
                                        type="text"
                                        value={form.descri}
                                        onChange={(e) => setForm({ ...form, descri: e.target.value })}

                                    />

                                </div>

                            </div>

                        </div>
                        <div className='bot'>

                            <button className='but-cadastro' onClick={cadastrar}>Confirma</button>
                            <button className='but-excluir' onClick={excluir}>Excluir Produto</button>

                        </div>
                        {
                            console.log(form)
                        }


                    </section>

                </div>
            </div>
        </div>
    )
}

export default EditarProduto