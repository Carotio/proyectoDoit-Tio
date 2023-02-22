import { plants } from '../../components/data/plants';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const [plantList, setPlantList] = useState([]);
    const { categoryId } = useParams();

    const getPlants = new Promise((resolve, reject) => {
        if (categoryId) {
            const filtrarProductos = plants.filter((item) => item.category === categoryId);
            setTimeout(() => {
                resolve(filtrarProductos);
            }, 1000)
        } else {
            setTimeout(() => {
                resolve(plants);
            }, 2000)
        }
    });

    useEffect(() => {
        getPlants.then((response) => {
            setPlantList(response)
        })
            .catch((error) => { console.log(error) })
    }, [categoryId])

    return <h2 style={{
        width: '100%', height: 'calc(100vh - 95px)', fontSize: '14px', display: "flex", justifyContent: 'center',
        alignItems: 'center', backgroundColor: "#A8BFBB"
    }}>
        <ItemList plantList={plantList} />
    </h2>;
}