import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import './PecaDelivery.css';
import {Link} from 'react-router-dom';

const PecaDelivery = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {

      try {
          
       const response = await axios.get("https://json-server-oh2f.onrender.com/hamburguerartesanal")
       

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