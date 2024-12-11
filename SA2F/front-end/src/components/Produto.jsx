import React, { useContext, useEffect, useState } from 'react';
import './Produto.css';
import SelectVenda from './SelectVenda';
import { GlobalContext } from '../contexts/GlobalContext';
import { Link } from 'react-router-dom';




function Produto(props) {
    let produto = props.produto

    const [ visibles, setVisibles ] = useState(false);
    const { visible, setVisible } = useContext(GlobalContext);
    const { selectedProduto, setSelectedProduto } = useContext(GlobalContext);
    const [idp,setIdp] = useState('')
    
    function editar() {
      let id = idp
    localStorage.setItem('produto', JSON.stringify(id));
        setSelectedProduto(idp)

    }
        
   
  // Função para alternar a visibilidade
  const visibilidade = () => {
    setVisibles(true); // Alterna o estado de 'visibles'
  };
  useEffect(() => {
    setIdp(produto.idp)
    
  }, [produto.idp])

  return (
    <section className='body-produto'>
      <div className='img-produto'>
        <img src= {produto.image} alt="Toggle" className='imagem-carro' />
      </div>
      <div className='dados-produto'>
        <p>{produto.marca} {produto.modelo}</p>
        <p className='p-versao'>{produto.versao}  {produto.combustivel}  {produto.cambio}</p>
      </div>
      <div className='dados-produto-preco'>
        <div className='preco-ano'>
          <p>R$ {produto.preco}</p>
          <p className='p-ano'>{produto.ano_fabri} / {produto.ano_modelo}</p>
        </div>
        <div className='KM'>
          <p>{produto.km} Km</p>
        </div>
      </div>
      <div className='div-but-produto'>
        <Link to = '/editarProduto' className='but-produto-link-editar' onClick={editar}><button className='but-produto-editar' >Editar</button></Link>

        
        <button className='but-produto-vender' onClick={visibilidade}>Vender</button>

        
        {visibles && <SelectVenda />}

      </div>
      <div className='produto-localiza'>
        <p><img src="./public/imagens/icon-loca.png" alt="" />  {produto.localizacao}</p>
      </div>

      
    </section>
    )
}

export default Produto
