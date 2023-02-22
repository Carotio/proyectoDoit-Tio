import { useState } from 'react';
import { plants } from '../data/plants';


const ItemCount = () => {
    const [ItemCount, setItemCount] = useState(0);
    const stock = (2); 
    const agregar = () => {
        if (ItemCount!== stock)
        setItemCount(ItemCount + 1);
    };
    const quitar = () => {
        if (ItemCount !== 0) {
            setItemCount(ItemCount - 1);
        }
    };
    return (
        <div>
            <h2>{ItemCount}</h2>
            <div>
                <button onClick={agregar}>+</button>
                <button onClick={quitar}>-</button>
            </div>
        </div>
    );
};

export default ItemCount;