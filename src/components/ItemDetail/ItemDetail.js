import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const {addItem} = useContext (CartContext);
  const [count, setCount] = useState(1);

  return (
    <div className="diagramacion">

      <div className="detalle"><img className="imagen" src={`/img/${detail.image}`} alt={detail.name} />
      </div>
        <div className="info">
          <h2 className="h2"> {detail.name}</h2>
          <h3 className="h3"> {detail.category}</h3>
          <h4 className="h4"> {detail.description}</h4>
          <h2 className="h2"> U$S{detail.price}</h2>
        </div>
      <div className="contador">
        <ItemCount item = {detail} count={count} setCount={setCount}/>
        
        <button className="boton" onClick={() => navigate ('/')}>Seguir comprando</button>
        <button
          className="boton" onClick={() => addItem (detail, count)}>Agregar al carrito
          </button> 
        <button className="boton" onClick={() => navigate ('/cart')}>Finalizar compra</button>
      </div>
    </div >

  )}

export default ItemDetail;