import React from 'react'
import "./Contato.css";


const Contato = () => {
  return (
    <div>
      
   <form action="/pagina-processa-dados-do-form" method="post">
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" />
    </div>
    <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="msg">Mensagem:</label>
        <textarea id="msg"></textarea>
    </div>
   </form>

    </div>
  )
}

export default Contato