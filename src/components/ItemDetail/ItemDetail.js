import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ detail }) => {
  return (
    <div className="diagramacion">
      <div className="detalle"><img className="imagen" src={detail.image} alt={detail.name} />
        <div className="info">
          <h2 className="h2"> {detail.name}</h2>
          <h3 className="h3"> {detail.category}</h3>
          <h4 className="h4"> {detail.description}</h4>
          <h2 className="h2"> {detail.price}</h2>
        </div>
      </div>
      <div className="contador">
        <ItemCount />
        <button className="boton">Agregar al carrito</button>
      </div>
    </div>



  )
}

export default ItemDetail;