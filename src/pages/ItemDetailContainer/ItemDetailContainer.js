import { plants } from "../../components/data/plants";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [detailProduct, setDetailProduct] = useState({});

    const getPlants = new Promise((resolve, reject) => {
        setTimeout(() => {

            const findPlant = plants.find((item) => item.id == id);
            resolve(findPlant)
        }, 1000)
    });

    useEffect(() => {
        getPlants
            .then(response => {
                setDetailProduct(response)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <ItemDetail detail={detailProduct} />
        </div>
    );
}
export default ItemDetailContainer;