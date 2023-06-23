const products = [
    {
        id: '1',
        name: 'cama',
        price: 1000,
        category: 'cama',
        img: null,
        stock: 25,
        description: 'cama desc'
    },
    {
        id: '2',
        name: 'mesa',
        price: 1000,
        category: 'mesa',
        img: null,
        stock: 25,
        description: 'mesa 12 desc'
    },
    {
        id: '3',
        name: 'silla',
        price: 1000,
        category: 'silla',
        img: null,
        stock: 25,
        description: 'silla desc'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    console.log(categoryId)
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}