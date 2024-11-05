import React from 'react'
import './Funcionario.css'
import Button from './Button'
import Button2 from './Button2'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Funcionario(props) {
    const {isVisible, setIsVisible} = useContext(GlobalContext);
    return (

        <section className='perfil1'>

            <div className='foto'>
                <label htmlFor="">{props.img}</label>
            </div>

            <div className='perfil-text'>

                <div className='perfil-text-encima'>

                    <label>Nome</label>
                    <label>Email</label>
                    <label>Numero</label>
                    <label>CPF</label>

                </div>

                <div className='perfil-text-embaixo'>

                    <label>{props.nome}</label>
                    <label>{props.email}</label>
                    <label>{props.fone}</label>
                    <label>{props.cpf}</label>


                </div>


            </div>

            <div className='botao-meta'>

                {isVisible && <Button />}
                {!isVisible && <Button2 />}

            </div>

        </section>

    )
}

export default Funcionario
