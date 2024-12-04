import React from 'react'
import { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './SelectVenda.css'


function SelectVenda() {

    const {funcionarios} = useContext(GlobalContext)

    
      // Estado para armazenar a seleção
      const [selecionado, setSelecionado] = useState('');
    
      // Função para lidar com a mudança da seleção
      const handleChange = (event) => {
        setSelecionado(event.target.value);
      };
      const { visible, setVisible } = useContext(GlobalContext);

      // Função para alternar a visibilidade
      const visibilidade = () => {
        setVisible(false); // Alterna o estado de 'visible'
      };



  return (
    <div className='select-container'>
      <label htmlFor="pessoa">Vendedor:</label>
      <select id="pessoa" value={selecionado} onChange={handleChange}>
        <option value="">Selecione...</option>
        {funcionarios.map((funcionarios) => (
          <option key={funcionarios.id} value={funcionarios.id}>
            {funcionarios.nome}
          </option>
        ))}
      </select>
      <p>Pessoa selecionada: {selecionado ? `ID: ${selecionado}` : 'Nenhuma selecionada'}</p>

          <button className='but-select-venda' onClick={visibilidade}>OK</button>
      
    </div>
  )
}

export default SelectVenda
