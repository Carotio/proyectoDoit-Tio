import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import CartWidget from '../CartWidget/CartWidget';


export default function NavBar() {
    return (
        <section className="header">
            <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
                to="/"><img style={{ height: '50px', width: '110px', margin: '40px' }} src={logo} alt="logo" /></NavLink>
            <div className='nav'>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
                        to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
                        to="/category/Comestible">Comestibles</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
                        to="/category/Suculenta">Suculentas</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
                        to="/category/Decoración">Decoración</NavLink>
                </li>
            </div>
            <CartWidget />
        </section>
    )
}

