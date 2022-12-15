import React from 'react'
import blogFetch from '../axios/config';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './PecaDelivery.css';
import {Link} from 'react-router-dom';

const PecaDelivery = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    console.log ("title, body");

    const post = {title, body, userId: 1};

    await blogFetch.post("/porcoes", {
      body: post,
    })
  }

  const [posts, setPosts] = useState([]);

  const getPosts = async() => {

      try {
          
       const response = await blogFetch.get("/hamburguerartesanal");

       const data = response.data;

       setPosts(data);
      } catch (error) {
          console.log(error);            
      }
  };

  const deletePosts = async() => {

  }

  useEffect(() => {
      getPosts();
      
  }, []);

  return (
    
    posts.map(item => (
      <div>
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
               onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='form-control'>
              <label htmlFor="body">Conteúdo</label>
              <textarea name="body" id="body" placeholder='Digite o conteúdo'
              onChange={(e) => setBody(e.target.value)}></textarea>
            </div>

            <input type="submit" value="Criar Post" className='btn' />
          </form>
        </div>

        
        <ul className='list-h'>
          <li className='nm'>{item.nome}</li>
          <li className='dc'>{item.descricao}</li>
          <li className='pc'>R$ {item.preco}</li>
        </ul>
      </div>
    ))

    

  )
}

export default PecaDelivery