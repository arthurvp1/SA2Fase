import React from 'react'
import './Produto.css'

function Produto(props) {
    return (
        <section className='body-produto'>
            <div className='img-produto'>
                <img src="" alt="Toggle" />

            </div>
            <div className='dados-produto'>
                <p>{props.marca} {props.modelo}</p>
                <p>{props.versao}</p>

            </div>
            <div className='dados-produto-preco'>
                <div className='preco-ano'>
                    <p>{props.ano}</p>
                    <p>{props.preco}</p>
                </div>
                <div className='KM'>
                    <p>{props.km}</p>

                </div>
            </div>
            <div className='div-but-produto'>

                <button>Editar</button>
            </div>
            <div className='prouto-localiza'>
                <p>{props.localizacao}</p>

            </div>

        </section>
    )
}

export default Produto
