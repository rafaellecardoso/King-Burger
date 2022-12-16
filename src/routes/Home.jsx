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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/burger16.jpg"
          alt="Second slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/batata1.jpg"
          alt="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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

  );

};

export default Home;