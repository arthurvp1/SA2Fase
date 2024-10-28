import React from 'react'
import './Cadastrofunc.css'
import { useState } from 'react'


function CadastroFunc() {

  const DataInput = () => {
        const [data, setData] = useState("");
    
        const handleInputChange = (e) => {
          let valor = e.target.value.replace(/\D/g, "");
    
          if (valor.length >= 3 && valor.length <= 4) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2);
          } else if (valor.length >= 5) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4, 8);
          }
          setData(valor);
        };
  return (
    <div className="Cadastrofunc-container">

      <aside className="esquerdo">

        <div className="texts">
          <label className="titulo">Cadastro de funcionários</label>
          <p className="descricao">Digite os dados do funcionário abaixo e clique em
            <label className="verde">&nbsp;Confirmar</label></p>
        </div>


        <section className="inputs">
          <input className="username-input" placeholder="Digite seu nome" type="text" />
          <input className="email-input" placeholder="Digite seu email" type="email" />
          <input className="senha-input" placeholder="Digite sua senha" type="password" />
          <input className="telefone" placeholder="Digite seu telefone" type="text" />
          <DataInput />
        </section>


        <section className="buttons">
          <button className="confirma">CONFIRMAR</button>
          <button className="limpa" onClick={handleClear}>LIMPAR</button>
        </section>
      </aside>


      {/* <aside className="direito">
        <div className="profile-section">
          <img className="profile-picture" src="profile-img.png" alt="Profile" />
          <button className="change-photo-button">Trocar Foto</button>
        </div>
      </aside> */}
    </div>
  )
}
}

export default CadastroFunc
