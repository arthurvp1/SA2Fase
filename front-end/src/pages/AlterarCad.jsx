import React from 'react'
import './AlterarCad.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function AlterarCad() {
    return (
        <div className='config-container'>

            <div className='body-container'>


                <div className='div-navbar'>

                    <Navbar/>
                </div>
                <div className='body-config'>
                    <div className='body-up'>
                        <div className='titulo-label'>

                        <h1>Alterar ou Cadastrar</h1>

                        </div>
                        <div className='div-but-back'>
                            <Link to='/config' className='back'>
                                <button className='but-back'> <img src="./public/imagens/icon-but-back.svg" alt=""  className='img-but'/> </button>
                            </Link>

                        </div>


                    </div>

                    <div className='body-mid'>



                        <Link to='/cadastroFunc' className='cadastro-func'>
                            <div className="icon-func">
                                <div className='icon-form'>

                                    <img src="./public/imagens/addFuncionario.png" alt="" className='img-cadastro' />
                                </div>
                            </div>
                            <div className='cadastro-label'>

                                <p>Cadastrar Novo Funcionário</p>
                            </div>
                        </Link>

                        <Link to='/alterar' className='alterar-func'>
                            <div className="icon-alterar">
                                <div className='icon-form'>

                                    <img src="./public/imagens/alterar.png" alt="" className='img-alterar' />
                                </div>
                            </div>
                            <div className='alterar-label'>

                                <p>Alterar Dado Funcionário</p>
                            </div>
                        </Link>



                    </div>



                </div>

            </div>
        </div>
    )
}

export default AlterarCad
