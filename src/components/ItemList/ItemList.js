import "./itemList.css";
import Item from "../Item/Item"
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"

const ItemList = ({ plantList }) => {
    return (
        <div className="itemList">
            {plantList.map((plants) => (
                <div key={plants.id}>
                    <Link to={`/item/${plants.id}`}>
                        <Item plant={plants} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;