import React from 'react'
import './Funcionario.css'
import { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Meta from './Meta';


function Funcionario(props) {

    let funcionario = props.funcionario

    // const { isVisible, setIsVisible } = useContext(GlobalContext);
    const [estado,setStado] = useState('perfil1')
    const [visible, setVisible] = useState(false);    
    const [imgbut, setImgbut] = useState("imagens/Polygon.png");
    const [imgButton, setImgButton] = useState(false)
    

    let visibles = false
    let estado1 = 'perfil1'




    const toggleVisibility = () => {

        if (imgButton === false) {
            setImgbut("imagens/Polygon 2.png")
            visibles = true
            estado1 = 'perfil12'
            
        } else {
            setImgbut("imagens/Polygon.png")
            visibles = false
            estado1 = 'perfil1'
            

        }

        setImgButton(!imgButton);
        setStado(estado1);

        setVisible(visibles);
    }


    return (

        <div className='fun-container'>
        <section className= {estado} >

            <div className='foto'>
                <label htmlFor="">{funcionario.img}</label>
            </div>

            <div className='perfil-text'>

                <div className='perfil-text-encima'>

                    <label>Nome</label>
                    <label>Email</label>
                    <label>Numero</label>
                    <label>CPF</label>

                </div>

                <div className='perfil-text-embaixo'>

                    <label>{funcionario.nome}</label>
                    <label>{funcionario.email}</label>
                    <label>{funcionario.fone}</label>
                    <label>{funcionario.cpf}</label>


                </div>


            </div>

            <div className='botao-meta'>
                <button className='botao-meta-element'><img src={imgbut} alt="Toggle" onClick={toggleVisibility} /></button>
            </div>

        </section>
        {visible && <Meta />}
        </div>

    )   
}

export default Funcionario
