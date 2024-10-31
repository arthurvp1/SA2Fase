import React, { useContext } from 'react'
import './Cadastrofunc.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'


function CadastroFunc() {

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [isValid, setIsValid] = useState(true);


  function cadastrar() {

    if (user === '' || email === '' || senha === '' || telefone === '') {
      alert('Preencha todos os campos')
      return
    }
    if (document.getElementById('data').value === '') {
      alert('Preencha a data de nascimento')
      return
    }
    if (telefone.length < 11) {
      alert('Telefone inválido')
      return
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('Email inválido ou em uso')
      return
    }
    
    alert('Cadastro realizado com sucesso!')

    limpaInputs()

  }
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

      <div className='div-navbar'>

        <Navbar />
      </div>
      <aside className="esquerdo">

        <div className="texts">
          <label className="titulo">Cadastro de funcionários</label>
          <p className="descricao">Digite os dados do funcionário abaixo e clique em
            <label className="verde">&nbsp;Confirmar</label></p>
        </div>


        <section className="inputs">
          <input id='input-nome' className="username-input" placeholder="Digite seu nome" type="text"
            onChange={(e) => setUser(e.target.value)} />

          <input id='input-email' className="email-input" placeholder="Digite seu email" type="email"
            onChange={(e) => setEmail(e.target.value)} />

          <input id='input-senha' className="senha-input" placeholder="Digite sua senha" type="password" onChange={(e) => setSenha(e.target.value)} />

          <input id='input-telefone' className="telefone" placeholder="Digite seu telefone" type="text" onChange={(e) => setTelefone(e.target.value)} />

          <DataInput />
        </section>


        <section className="buttons">
          <button className="confirma" onClick={cadastrar}>CONFIRMAR</button>
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
  )
}




export default CadastroFunc
