import React from 'react'
import './Produto.css'

function Produto(props) {
    let produto = props.produto
    
    return (
        <section className='body-produto'>
            <div className='img-produto'>
                <img src="" alt="Toggle" />

            </div>
            <div className='dados-produto'>
                <p>{produto.marca} {produto.modelo}</p>
                <p className='p-versao'>{produto.versao}</p>

            </div>
            <div className='dados-produto-preco'>
                <div className='preco-ano'>
                    <p>R$ {produto.preco}</p>
                    <p className='p-ano'>{produto.ano}</p>
                </div>
                <div className='KM'>
                    <p>{produto.km} Km</p>

                </div>
            </div>
            <div className='div-but-produto'>

                <button className='but-produto-editar'>Editar</button>
            </div>
            <div className='prouto-localiza'>
                <p><img src="./public/imagens/icon-loca.png" alt="" />  {produto.localizacao}</p>

            </div>

        </section>
    )
}

export default Produto
