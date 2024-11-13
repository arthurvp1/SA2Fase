import React from 'react'
import './CadastroProduto.css'
import Navbar from '../components/Navbar'

function CadastroProduto() {
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
                                <input type="text" className='inp-marca' />
                                <label htmlFor="inp-anoFabri">Ano Fabriação</label>
                                <input type="text" className='inp-anoFabri' />
                                <label htmlFor="inp-cor">Cor</label>
                                <input type="text" className='inp-cor' />
                                <label htmlFor="inp-preco">Preço</label>
                                <input type="text" className='inp-preco' />

                            </div>
                            <div className='container-dados-produto-direita'>
                                <div className='container-dados-produto-direita-cima'>
                                    <div className='container-dados-produto-direita-cima-esquerda'>
                                        <label htmlFor="inp-modelo">Modelo</label>
                                        <input type="text" className='inp-modelo' />
                                        <label htmlFor="inp-anoModelo">Ano Modelo</label>
                                        <input type="text" className='inp-anoModelo' />
                                        <label htmlFor="inp-combustivel">Combustivel</label>
                                        <input type="text" className='inp-combustivel' />

                                    </div>
                                    <div className='container-dados-produto-direita-cima-direita'>
                                        <label htmlFor="inp-versao">Versao</label>
                                        <input type="text" className='inp-versao' />
                                        <label htmlFor="inp-km">Kilometragem</label>
                                        <input type="text" className='inp-km' />
                                        <label htmlFor="inp-cambio">Câmbio</label>
                                        <input type="text" className='inp-cambio' />

                                    </div>

                                </div>
                                <div className='container-dados-produto-direita-baixo'>
                                    
                                    <label htmlFor="">Descriçao</label>
                                    <input type="text"  className='inp-descri'/>


                                </div>

                            </div>

                        </div>
                        <div className='bot'>
                            <label htmlFor="inp-produtoID">id Produto</label>
                            <input type="text" className='inp-produtoID'/>

                        </div>


                    </section>

                </div>
            </div>
        </div>
    )
}

export default CadastroProduto
