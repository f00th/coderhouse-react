import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const category = useParams()
    
    useEffect(() => {
        const productsCollection = collection(db, "products")
        getDocs(productsCollection).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            )
        })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;