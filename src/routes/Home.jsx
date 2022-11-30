import axios from "axios";

import { useState, useEffect } from "react";

import {Link} from 'react-router-dom';

import "./Home.css";

const Home = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async() => {

        try {
            
         const response = await axios.get("https://json-server-oh2f.onrender.com/hamburguer")

         console.log(response);
        } catch (error) {
            console.log(error);            
        }

    };

    useEffect(() => {
        getPosts();
    }, []);

  return <div>Home</div>;
};

export default Home;