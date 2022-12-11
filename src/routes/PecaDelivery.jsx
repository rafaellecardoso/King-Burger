import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const PecaDelivery = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {

      try {
          
       const response = await axios.get("https://json-server-oh2f.onrender.com/hamburguer")

       const data = response.data;

       setPosts(data);
      } catch (error) {
          console.log(error);            
      }

  };
  useEffect(() => {
      getPosts();
  }, []);

  return (
    <div>Peça seu Delivery</div>
  )
}

export default PecaDelivery