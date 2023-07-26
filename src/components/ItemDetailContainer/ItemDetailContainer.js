import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const productsCollection = doc(db, "products", itemId)
        getDoc(productsCollection).then((snapshot) => {
            setProducts(({ id: snapshot.id, ...snapshot.data() }))
        })

    }, [itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;