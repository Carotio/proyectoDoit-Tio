
const ItemCount = ({count, setCount, item}) => {

    const stock = (item.stock); 
    const agregar = () => {
        if (count!== stock)
        setCount(count + 1);
    };
    const quitar = () => {
        if (count === 0) {
            return;
        }    
        setCount(count - 1);
    };

    return (
        <div>
            <div className="contador" >
                <button className="manejador"  onClick={agregar}>+</button>
                    <span>{count}</span>
                <button className="manejador"  onClick={quitar}>-</button>
            </div>
        </div>
    );
};

export default ItemCount;