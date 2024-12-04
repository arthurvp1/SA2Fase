import React, { useContext, useState } from 'react'
import './AlterarFunc.css'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { Navigate, useNavigate } from "react-router-dom";

function AlterarFunc() {
    const Navigate = useNavigate()

    const {funcionarios, setFuncionarios} = useContext(GlobalContext)
    let objeto = {
      nome: '',
      email: '',
      fone: '',
      cpf: '',
      data: ''
    }
    const [nome, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState()
    const [cpf, setCpf] = useState()
    const [data, setData] = useState('');
    const [meta, setMeta] = useState()
    const [isValid, setIsValid] = useState(true);
  
  
    function cadastrar() {
  
      if (nome === '' || email === '' || senha === '' || telefone === '') {
        alert('Preencha todos os campos');
        return;
      }
      if (document.getElementById('data').value === '') {
        alert('Preencha a data de nascimento');
        return;
      }
      if (telefone.length < 11) {
        alert('Telefone inválido');
        return;
      }
      if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
        alert('Email inválido ou em uso');
        return;
      }
      if (cpf.length === '') {
        alert('Digite um CPF válido')
        return
      }
      else{
        alert('Cadastro realizado com sucesso!')
  
        objeto.nome = nome
        objeto.email = email 
        objeto.fone = telefone
        objeto.cpf = cpf
        objeto.data = data
        objeto.senha = senha
        objeto.id = funcionarios.length + 1
        objeto.meta = meta
  
        setFuncionarios([...funcionarios, objeto])
  
        limpaInputs()  
        Navigate('/')
        
        return;
      }
  
    }
  
    function limpaInputs() {
  
      document.getElementById('input-nome').value = ''
      document.getElementById('input-email').value = ''
      document.getElementById('input-senha').value = ''
      document.getElementById('input-telefone').value = ''
      document.getElementById('cpf').value = ''
      document.getElementById('data').value = ''
      setMeta('')
  
    }
  
    //ａｑｕｉ ｅ ｏ ｃｏｒｐｏ ｄａ ｐａｇｉｎａ
  
    return (
      <div className="Cadastrofunc-container">
  
  
        <div className='body-container'>
  
          <div className='div-navbar'>
  
            <Navbar />
          </div>
          <aside className="esquerdo">
  
            <div className="textsAlterar">
              <label className="titulo">Alterar dados</label>
              {/* <p className="descricao">Preencha os dados do funcionário abaixo:</p> */}
            </div>
  
  
            <section className="inputs">
              <input
                id='input-nome'
                className="username-input"
                placeholder="Nome completo"
                autoComplete='off'
                type="text"
                onChange={(e) => setUser(e.target.value)} />
  
              <input
                id='input-email'
                className="email-input"
                autoComplete='off'
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)} />
  
              <input
                type="text"
                id="cpf"
                className="cpf-input"
                autoComplete='off'
                value={cpf}
                onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))} // Remove todos os caracteres não numéricos
                maxLength="11"
                placeholder="CPF"
              />
  
              <input
                id='input-senha'
                className="senha-input"
                placeholder="Senha funcionário"
                autoComplete='off'
                type="password" onChange={(e) =>
                  setSenha(e.target.value)} />
  
              <input
                type="text"
                id='input-telefone'
                className="telefone"
                autoComplete='off'
                value={telefone}
                onChange={(e) => setTelefone(e.target.value.replace(/\D/g, ""))} // Remove todos os caracteres não numéricos
                maxLength="11"
                placeholder="Telefone funcionário"
              />
              <input
                className="nascimento-input"
                autoComplete='off'
                type="text" id="data" name="data"
                value={data}
                onChange={(e) => {
                  let valor = e.target.value.replace(/\D/g, "");
            
                  if (valor.length >= 3 && valor.length <= 4) {
                    valor = valor.slice(0, 2) + "/" + valor.slice(2);
                  } else if (valor.length >= 5) {
                    valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4, 8);
                  }
            
                  setData(valor);
                }}
                maxLength="10"
                placeholder="Data de nascimento"
              />
              <input
                type="number"
                id='input-meta'
                autoComplete='off'
                className="meta"
                value={meta}
                onChange={(e) => setMeta(e.target.value)} // Remove todos os caracteres não numéricos
                maxLength="7"
                placeholder="Meta do funcionário (K)"
              />
            </section>
  
            <section className="buttons">
              <button className="confirma" onClick={cadastrar}>CONFIRMAR</button>
              <button id="botaoLimpa" className="limpa" onClick={limpaInputs} >LIMPAR</button>
            </section>
          </aside>
  
  
  
          <aside className="direito">
            <div className="profile-sectionAlt">
              <img className="profile-pictureAlt" src="./imagens/profilepicture.png" />
              <select name="" id="" className='selectFunc' >
                <option value="0" disabled selected>Selecione o funcionário</option>
              </select>
              <button className="change-photo-button">Trocar Foto</button>
            </div>
          </aside>
        </div>
      </div>
  
  
  
    )
  }

export default AlterarFunc
