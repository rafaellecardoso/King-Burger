import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}> <img className='logo' src="./img/logoking-fun.png" /> </Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/contato'}>Contato</Link>
            </li>
            <li>
                <Link to={'/new'} className="new-btn">
                    Peça seu Delivery</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar