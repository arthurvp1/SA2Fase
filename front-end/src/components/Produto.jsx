import React, { useContext } from 'react';
import './Produto.css';
import SelectVenda from './SelectVenda';
import { GlobalContext } from '../contexts/GlobalContext';


function Produto(props) {
    let produto = props.produto

    const { visible, setVisible } = useContext(GlobalContext);

  // Função para alternar a visibilidade
  const visibilidade = () => {
    setVisible(true); // Alterna o estado de 'visible'
  };

  return (
    <section className='body-produto'>
      <div className='img-produto'>
        <img src="" alt="Toggle" />
      </div>
      <div className='dados-produto'>
        <p>{produto.marca} {produto.modelo}</p>
        <p className='p-versao'>{produto.versao}  {produto.combustivel}  {produto.cambio}</p>
      </div>
      <div className='dados-produto-preco'>
        <div className='preco-ano'>
          <p>R$ {produto.preco}</p>
          <p className='p-ano'>{produto.anoFabri} / {produto.anoModelo}</p>
        </div>
        <div className='KM'>
          <p>{produto.km} Km</p>
        </div>
      </div>
      <div className='div-but-produto'>
        <button className='but-produto-editar'>Editar</button>

        
        <button className='but-produto-editar' onClick={visibilidade}>Vender</button>

        
        {visible && <SelectVenda />}
      </div>
      <div className='produto-localiza'>
        <p><img src="./public/imagens/icon-loca.png" alt="" />  {produto.localizacao}</p>
      </div>
    </section>
    )
}

export default Produto
