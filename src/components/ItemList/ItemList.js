import Item from '../Item/Item';

const ItemList = ({products}) => {
    if (products.length > 0) {
        return (
            <div>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        )
    }
}

export default ItemList