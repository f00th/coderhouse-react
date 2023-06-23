import { useState, useEffect } from 'react';
import { getProductByCategory ,getProducts } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    console.log(products)
    const params = useParams()
    
    useEffect(() => {
        if (!params.categoryId) {
            getProducts()
                .then(response => {
                    setProducts(response)
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            getProductByCategory(params.categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [params.categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;