import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

export default function ItemListContainer({ }) {
    const [plantList, setPlantList] = useState([]);
    const { categoryId } = useParams();

    //base de datos

    const getPlants = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'plants')
        //filtrado
        if (categoryId) {
            const filtrado = query(querySnapshot, where('category', '==', categoryId));
            getDocs(filtrado)
                .then((response) => {
                    const list = response.docs.map((doc) => {
                        return {
                            id: doc.id, ...doc.data()
                        }
                    })
                    setPlantList(list);
                })
                .catch((error) => { console.log(error) })
        } else {
            getDocs(querySnapshot)
                .then((response) => {
                    const list = response.docs.map((doc) => {
                        return {
                            id: doc.id, ...doc.data()
                        }
                    })
                    setPlantList(list);
                })
                .catch((error) => { console.log(error) })
        }
    }

    useEffect(() => {
        getPlants();
    }, [categoryId])

    return <h2 style={{
        width: '100%', height: 'calc(100vh - 95px)', fontSize: '14px', display: "flex", justifyContent: 'center',
        alignItems: 'center', backgroundColor: "#A8BFBB"
    }}>
        <ItemList plantList={plantList} />
    </h2>;
} 