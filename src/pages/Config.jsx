import React from 'react'
import './Config.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Config() {
    return (
        <div className='config-container'>

            <div className='body-container'>


                <div className='div-navbar'>

                    <Navbar />
                </div>
                <div className='body-config'>
                    <div className='body-up'>

                        <h2>Config Rapida</h2>

                    </div>

                    <div className='body-mid'>

                        <Link to='/userConfig' className='perfil-user'>
                            <div className="icon-perfil">
                                <div className='icon-form'>

                                    <img src="./public/imagens/user-config.svg" alt="" className='img-perfil' />
                                </div>
                            </div>

                            <div className='perfil-label'>

                                <p>User Config</p>
                            </div>
                        </Link>

                        <Link to='/relatorio' className='gerar-relatorio'>
                            <div className="icon-relatorio">
                                <div className='icon-form'>

                                    <img src="./public/imagens/icon-vendas.svg" alt="" className='img-relatorio' />
                                </div>
                            </div>
                            <div className='relatorio-label'>

                                <p>Relatorio de vendas</p>
                            </div>
                        </Link>

                        <Link to='/gerenFunc' className='gerencia-func'>
                            <div className="icon-func">
                                <div className='icon-form'>

                                    <img src="./public/imagens/icon-gerencia.svg" alt="" className='img-gerencia' />
                                </div>
                            </div>
                            <div className='gerencia-label'>

                                <p>Gerenciar Funcionarios</p>
                            </div>
                        </Link>

                        <Link to='/gerenFunc' className='historico-venda'>
                            <div className="icon-historico">
                                <div className='icon-form'>

                                    <img src="./public/imagens/icon-histo.svg" alt="" className='img-historico' />
                                </div>
                            </div>
                            <div className='historioco-label'>

                                <p>Historico de Vendas</p>

                            </div>
                        </Link>

                    </div>



                </div>

            </div>
        </div>
    )
}

export default Config
