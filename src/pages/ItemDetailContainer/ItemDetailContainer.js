import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const [detailProduct, setDetailProduct] = useState({});

    const getPlants = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, 'plants', id);

        getDoc(querySnapshot)
            .then((res) => {
                setDetailProduct({
                    id: res.id, ...res.data()
                })
            })
            .catch((error) => { console.log(error) })

    }


    useEffect(() => {
    
        getPlants();
    }, []);
        return (
            <div>
                <ItemDetail detail={detailProduct} />
            </div>
        );
    }

export default ItemDetailContainer;