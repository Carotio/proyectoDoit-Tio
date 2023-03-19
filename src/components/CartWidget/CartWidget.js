import cesta from '../../img/cesta.png';
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0)
    useEffect (() => {setTotal(cart.reduce((previo, actual) => previo + actual.quantity, 0 ))}, [cart])
    return (
        <Link to ={'/cart'}>
            <div style={{
        fontSize: '14px', display: "flex", flexDirection: "column", justifyContent: 'center',
        alignItems: 'center'
    }} >
                <img style={{ height: '30px', width: '30px', margin: '0 40px' }} src={cesta} alt="ícono de cesta" /> {total}
            </div>
        </Link>
    );
}

