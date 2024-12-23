import React from 'react'
import './Config.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Config() {
    return (
        <div className='config-container'>

            <div className='body-container'>


                <div className='div-navbar'>

                    <Navbar/>
                </div>
                <div className='body-config'>
                    <div className='body-up'>
                        <div className='title-config'>  
                        <label htmlFor="" className='lbl-title'>Configurações Rápidas</label>

                        </div>
                        <div className='div-but-back'>
                            <Link to='/' className='back'>
                                <button className='but-back'> <img src="./public/imagens/icon-but-back.svg" alt=""  className='img-but'/> </button>
                            </Link>

                        </div>


                    </div>

                    <div className='body-mid'>

                        {/* <Link to='/userConfig' className='perfil-user'>
                            <div className="icon-perfil">
                                <div className='icon-form'>

                                    <img src="./public/imagens/user-config.png" alt="" className='img-perfil' />
                                </div>
                            </div>

                            <div className='perfil-label'>

                                <p>Configurações de Usuário</p>
                            </div>
                        </Link> */}

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

                        <Link to='/historico' className='historico-venda'>
                            <div className="icon-historico">
                                <div className='icon-form'>

                                    <img src="./public/imagens/icon-histo.png" alt="" className='img-historico' />
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
