import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return ( 

  <div>
   <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/burger3.jpg"
          alt="First slide"/>
        <Carousel.Caption>
          <h3>Bacon Geleia Barbecue</h3>
          <p> Graça e doçura em cada mordida.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/burger16.jpg"
          alt="Second slide"/>
        <Carousel.Caption>
          <h3>Caminhos do Infinito</h3>
          <p>Debrave o infinito em cada mordida.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/batata1.jpg"
          alt="Third slide"/>
        <Carousel.Caption>
          <h3>Combo da Misericórdia</h3>
          <p> Monte seu combo da misericordia</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    <div className="sobreaEmpresa">
    <h1>Sobre a empresa</h1>
            <p>
             King Burger é uma empresa que visa fazer um hamburguer mais gostoso e criativo para o cliente.
             
             Foi criado pelos... que tinham um sonho de criar um negócio de sucesso.
             
             O king burguer tem como missão a qualidade.

             A empresa preza pela qualidade excelente no preparo nos seus produtos, assim como no atendimento de todo o público, no ambiente familir e tranquilo. 
            </p>
            </div>
            
  </div>

  )
};

export default Home;
