import React from 'react'
import blogFetch from '../axios/config';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './PecaDelivery.css';
import {Link} from 'react-router-dom';

const PecaDelivery = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState()
  const [preco, setPreco] = useState()
  const [descricao, setDescricao] = useState()



  // Novo Hamburguer
  const createPost = async (e) => {
    e.preventDefault();

    await blogFetch.post("/hamburguer", {
      nome: nome,
      preco: preco,
      descricao: descricao
    })
    alert(`Hamburguer "${nome}" cadastrado com sucesso!`)
  }

  return (
    <div className='wrapper-cadastro'>
      <div className='container-cadastro'>
        <h2>Cadastrar novo hamburguer</h2>
        <form onSubmit={(e) => createPost(e)}>
          <div>
            <label htmlFor="nome">Nome do hamburguer</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Digite o nome do hamburguer"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="descricao">Descricao </label>
            <input
              type="text"
              required
              name="descricao"
              placeholder="Digite os ingredientes"
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="preco">Preço: </label>
            <input
              type="number"
              required
              name="preco"
              placeholder="Digite o preço"
              id="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>
          <input className='btn-cadastrar' type="submit" value="Cadastrar hambúrguer" />
        </form>
      </div>
    </div>
  );
}

export default PecaDelivery