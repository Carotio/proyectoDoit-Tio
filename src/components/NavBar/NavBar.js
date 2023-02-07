import './NavBar.css';
import logo from '../../img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar () {
    return(
        <section className = "header">
            <img style={{height: '50px', width: '110px', margin: '40px'}} src={logo} alt="logo"/>
            <li><a href="">Comestible</a></li>
            <li><a href="">Suculenta</a></li>
            <li><a href="">Decoración</a></li>
            <CartWidget/>
        </section>
    )
}

