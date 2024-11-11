import React from 'react'
import './Funcionario.css'
import { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Funcionario(props) {

    const { isVisible, setIsVisible } = useContext(GlobalContext);

    
    const [imgbut, setImgbut] = useState("imagens/Polygon.png");
    const [imgButton, setImgButton] = useState(false)




    const toggleVisibility = () => {

        if (imgButton === true) {
            setImgbut("imagens/Polygon.png")

        } else {
            setImgbut("imagens/Polygon 2.png")
        }

        setImgButton(!imgButton);

    }


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
                <button className='botao-meta-element'><img src={imgbut} alt="Toggle" onClick={toggleVisibility} /></button>
            </div>

        </section>

    )
}

export default Funcionario
