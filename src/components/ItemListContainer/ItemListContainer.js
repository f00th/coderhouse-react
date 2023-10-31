import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, where, query} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    
    
    useEffect(() => {
        const productsCollection = collection(db, "products")
        
        
        if (categoryId) {
            const queryFilter = query(productsCollection, where('category', '==', categoryId));
            getDocs(queryFilter).then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            })
        } else {
            getDocs(productsCollection).then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            })
        }
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;