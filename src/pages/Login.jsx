import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import { useState } from 'react'



function Login() {
    const { admin, setAdmin } = useContext(GlobalContext)
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    let login = false


    function logar() {

        var checkbox = document.getElementById('check')
        alert(checkbox.value)

        if (checkbox.value == 'sim') {
            alert('está marcado')
            document.getElementById('user').setAttribute(autoComplete = 'on')
        }
        if (checkbox.value != 'sim') {
            alert('não está marcado')
            document.getElementById('user').setAttribute(autoComplete = 'off')
        }

        admin.map((item) => {

            if (item.userName == usuario && item.password == senha) {
                login = true;
                alert('Login efetuado com sucesso');
                window.location.href = '/'
            } else {
                login = false;
                alert('Usuario ou senha incorretos');
            }
        })

    

    }
    return (
        <div className='login-container'>


            <div className='esquerda-container'>
                <div className='div-esquerda-top'>

                    <img src="./imagens/iconSale.png" alt="" className='img-icon-sale' />

                    <h1 className='h1-icon'>SaleSight</h1>

                </div>
                <div className='div-esquerda-meio'>
                    <img src="./imagens/projeto.png" alt="" className='img-project' />

                </div>
                <div className='div-esquerda-bot'>
                    <div className='div-p-bot-login1'>
                        <p className='p-login-transformando'>Transformando Dados </p>
                        <p className='p-login-transformando'>em Decisões</p>
                    </div>
                    <div className='div-p-bot-login2'>

                        <p>Com nossa plataforma de relatório de venda, impulsione suas </p>
                        <p>estratégias e maximize seus resultados</p>
                    </div >

                </div>


            </div>
            <div className='direita-contaier'>
                <div className='div-direita-esquerda'>

                </div>
                <div className="dados">
                    <div className='div-h1-direita'>
                        <h1>Entrar & Conectar-se aos melhores relatórios de venda</h1>
                    </div>
                    <div className='buttons-goo-in'>
                        <button className='but-icon'> <img src="./public/imagens/icon-google.png" alt="" className='icon-but' /> Entrar Com Google</button>
                        <button className='but-icon'> <img src="./public/imagens/icon-linkedin.png" alt="" className='icon-but' /> Entrar Com Linkedin</button>

                    </div>
                    <div className='div-inputs-login'>
                        <div className='form'>
                            <label htmlFor="user">Usuário:</label>
                            <input
                                autoComplete='on'
                                type="text"
                                id='user'
                                className='user'
                                onChange={(e) => setUsuario(e.target.value)}
                                value={usuario}
                            />
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id='senha'
                                className='password'
                                onChange={(e) => setSenha(e.target.value)}
                                value={senha}
                            />
                        </div>
                        <div className='form2'>

                            <div className='lbl-check'>
                                <input type="checkbox"
                                    id='check'
                                    value={'sim'} />

                                <label htmlFor="check">Lembrar-me</label>

                            </div>
                            <div className='div-but-entrar'>
                                <button onClick={logar} className='but-entrar'>Entrar</button>


                            </div>
                        </div>

                    </div>
                    <div className='div-before-bot'>

                    </div>
                    <div className='div-bot'>

                    </div>
                </div>
                <div className='div-direita-direita'>

                </div>
            </div>
        </div>
    )
}

export default Login
