import { useState } from "react"
import { getFirestore, addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const Checkout = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirmation, setEmailConfirmation] = useState('')
    const [error, setError] = useState('')
    const [orderId, setOrderId] = useState('')
    const [message, setMessage] = useState('')


const { cart, removeItem, sum } = useContext(CartContext)

const formHandler = (event) => {
    event.preventDefault()
    if (!name || !lastName || !phone || !email || !emailConfirmation) {
        setError('Por favor completa todos los campos')
        return
    }

    if (email !== emailConfirmation) {
        setError('Los email no coinciden')
    }
    const total = sum
    const order = {
        items: cart.map((product) => ({
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })),
        total: total,
        fecha: new Date(),
        name,
        lastName,
        phone,
        email,}

    Promise.all(
        order.items.map (async (productOrder) => {
            const db = getFirestore()
            const productRef = doc (db, 'products', productOrder.id)
            const productDoc = await getDoc(productRef)
            const actualStock = productDoc.data().stock
            
            updateDoc(productRef, {
                stock: actualStock - productOrder.quantity
            })
        })
    )
    .then(() => {
        const db = getFirestore()
        addDoc(collection(db, 'orders', order))
        .then((docRef) => {
            setOrderId(docRef.id)
            removeItem()
        })
        .catch((error) => {
            console.log('Error en la creacion de orden', error)
            setError('Error en orden')
        })
        .catch((error) => {
            console.log('No se puede actualizar el stock', error)
            setError('No se actualizo el stock')
        })
    
        setName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setEmailConfirmation('')
        setMessage('')
    })
        
    }

    
return(
    <div>
        <h2>Completa tus datos para confirmar la compra:</h2>
        <form onSubmit={formHandler}>
            {cart.map((products) =>
                <div key={products.id}>
                <p>
                    {''}
                    {products.name} x {products.quantity}
                </p>
                <p>$ {sum}</p>
                </div>
            )}
            <div>
                <label>Nombre</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Apellido</label>
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Telefono</label>
                <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
            <div>
                <label>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Confirmar email</label>
                <input type='email' value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)}></input>
            </div>
            
            {error && <p>{error}</p>}
            {orderId && (
                <p>Gracias por su compra! <br/> {orderId}</p>
            )}

            <div><button type='submit'>Finalizar compra</button></div>
        </form>
    </div>
)}


export default Checkout;