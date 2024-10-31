import React from 'react'
import './Cadastrofunc.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'


function CadastroFunc() {

  //Ｃｒｉａ ｃｏｍｐｏｎｅｎｔｅ ｄａｔｅ

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
      <input
        className="nascimento-input"
        type="text" id="data" name="data"
        value={data}
        onChange={handleInputChange}
        maxLength="10"
        placeholder="dd/mm/aaaa"
      />
    );
  };


  //functions


    //function limpar inputs

    function limpaInputs() {

      document.getElementById('input-nome').value = ''
      document.getElementById('input-email').value = ''
      document.getElementById('input-senha').value = ''
      document.getElementById('input-telefone').value = ''
      document.getElementById('data').value = ''

    }

  //ａｑｕｉ ｅ ｏ ｃｏｒｐｏ ｄａ ｐａｇｉｎａ

  return (
    <div className="Cadastrofunc-container">


    <div className='body-container'>

      <div className='div-navbar'>

        <Navbar/>
      </div>
      <aside className="esquerdo">

        <div className="texts">
          <label className="titulo">Cadastro de funcionários</label>
          <p className="descricao">Digite os dados do funcionário abaixo e clique em
            <label className="verde">&nbsp;Confirmar</label></p>
        </div>


        <section className="inputs">
          <input id='input-nome' className="username-input" placeholder="Digite seu nome" type="text" />
          <input id='input-email' className="email-input" placeholder="Digite seu email" type="email" />
          <input id='input-senha' className="senha-input" placeholder="Digite sua senha" type="password" />
          <input id='input-telefone' className="telefone" placeholder="Digite seu telefone" type="text" />
          <DataInput />
        </section>


        <section className="buttons">
          <button className="confirma">CONFIRMAR</button>
          <button id="botaoLimpa" className="limpa" onClick={limpaInputs} >LIMPAR</button>
        </section>
        
      </aside>


      <aside className="direito">
        <div className="profile-section">
          <img className="profile-picture" src="./images/user.png" alt="Profile" />
          <button className="change-photo-button">Trocar Foto</button>
        </div>
      </aside>
    </div>
    </div>
  )
}




export default CadastroFunc
