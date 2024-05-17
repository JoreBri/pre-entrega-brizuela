import React, { useState } from 'react'

export const ItemCounts = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState (initial)
    const increment =() => {
        if (quantity < stock) {
            setQuantity (quantity + 1)
        }
    }
    const decrement =() => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
    <div className='counter'>
        <div className='controles'>
            <button className='botonProductos' onClick={decrement}> ➖ </button>
            <h4 className='numero'> {quantity} </h4>
            <button className='botonProductos' onClick={increment}>➕ </button>
        </div>
        <div>
            <button className='botonProductos' onClick={() => onAdd(quantity)} disabled={!stock} >Agregar al carrito</button>
        </div>
    </div>
    )
}
