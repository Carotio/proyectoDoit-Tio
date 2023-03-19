import "./item.css";

const Item = ({ plant }) => {
    return (
        <div className="obj">
            <div className="item">
                <img class="img" alt={plant.name} src={`/img/${plant.image}`} width="100px" />
                <h2 className="h2">{plant.name}</h2>
                <h3 className="h3" >{plant.category}</h3>
                <h2 className="h2">U$S{plant.price}</h2>
            </div>
        </div>
    )
}

export default Item;