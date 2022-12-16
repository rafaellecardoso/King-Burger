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

  // Novo Hamburguer
  const createPost = async (e) => {
    e.preventDefault();

    console.log ({nome, preco});

    // const post = {title, body, userId: 1};

    await blogFetch.post("/hamburguer", {
      nome: nome,
      preco: preco
    })
  }

  const [burguer, setBurguer] = useState([]);

  useEffect(() => {
    blogFetch.get("/hamburguer")
    .then(response=>setBurguer(response.data))
  }, [])


  // Buscar Hamburgueres

  // const getPosts = async() => {

  //     try {
          
  //      const response = await blogFetch.get("/hamburguer");

  //      const data = response.data;

  //      setPosts(data);
  //     } catch (error) {
  //         console.log(error);            
  //     }
  // };





  const deletePosts = async() => {

  }

  // useEffect(() => {
  //     getPosts();
      
  // }, []);


  burguer.map(item => (
    <div>
      <ul className='list-h'>
        <li className='nm'>{item.nome}</li>
        <li className='dc'>{item.descricao}</li>
        <li className='pc'>R$ {item.preco}</li>
      </ul>
    </div>
  ))
  return (
    <>
    <div className='new-post'>
    <h2>Inserir burger</h2>
    <form onSubmit={(e) => createPost(e)}>
      <div className='form-control'>
        <label htmlFor="title">Título</label>
        <input
         type="text"
         name="title" 
         id="title"
         placeholder='Digite o burger'
         onChange={(e) => setNome(e.target.value)}/>
      </div>

      <div className='form-control'>
        <input type="number" onChange={(e) => setPreco(e.target.value)}></input>
      </div>
      {/* <div className='form-control'>
        <label htmlFor="body">Conteúdo</label>
        <textarea name="body" id="body" placeholder='Digite o conteúdo'
        onChange={(e) => setBody(e.target.value)}></textarea>
      </div> */}

      <button onClick={createPost} className='btn' >Criar post</button>
    </form>
  </div>



    
    </>
  )
}

export default PecaDelivery