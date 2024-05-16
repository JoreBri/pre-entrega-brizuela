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
    <div className='Counter'>
        <div className='controles'>
            <button className='button' onClick={decrement}> ➖ </button>
            <h4 className='numero'> {quantity} </h4>
            <button className='button' onClick={increment}>➕ </button>
        </div>
        <div>
            <button className='button' onClick={() => onAdd(quantity)} disabled={!stock} ></button>
        </div>
    </div>
    )
}
