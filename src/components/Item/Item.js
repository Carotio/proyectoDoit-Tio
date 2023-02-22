import { plants } from "../data/plants";
import "./item.css";
import ItemCount from "../ItemCount/ItemCount"


const Item = ({ plant }) => {
    return (
        <div className="obj">
            <div className="item">
                <img alt={plant.name} src={plant.image} width="100px" />
            <h2 className="h2">{plant.name}</h2>
            <h3 className="h3" >{plant.category}</h3>
            <h2 className="h2">{plant.price}</h2>
            </div>
            
            <div className="contador">
                <ItemCount />
                <button className="boton">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Item;