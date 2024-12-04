import React from 'react'
import './MaisVendidos.css'
import Navbar from '../components/Navbar'
import ProdutoEstoque from '../components/ProdutoEstoque'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'

function MaisVendidos() {
  const { produtos, setProdutos } = useContext(GlobalContext)

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }


  };

  useEffect(() => {
    getUsers();
    
  }, []);
  useEffect(() => {
    console.table(produtos);
  }
  , [produtos]);


 

  return (
    <div className='maisVendidos-container'>
      <div className='body-container'>

        <div className='div-navbar'>

          <Navbar />
        </div>
        <div className='body-maisVendidos'>

          <label title='titulo' className='titulo-Estoque' htmlFor="">Estoque</label>

          <div className="dadosEstoque">

            <div className='header-estoque'>

              <label htmlFor="">Marca</label>
              <label htmlFor="">Modelo</label>
              <label htmlFor="">Ano</label>
              <label htmlFor="">Km</label>
              <label htmlFor="">Cor</label>
              <label htmlFor="">ID</label>
              <label htmlFor="">Status</label>

            </div>

            <div className='componente-produtoEstoque'>

              {
                produtos.map((p) => (
                  <ProdutoEstoque key={p.idp} estoque={p} />
                ))
              }

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MaisVendidos
