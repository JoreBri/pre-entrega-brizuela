import React from 'react'
import { Item } from './Item'
import { ItemCounts } from './ItemCounts'

export const ItemList = ( {productos} ) => {
    return (
    <div className='listaProductos'>
        {
            productos.length > 0 ?
            productos.map (producto => {
                return <Item key = { producto.id} producto={producto} />
            
            })
            : <p>No hay productos</p>
        }
        </div>
    )
}
