import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categories from "../data/categorias.json";
import { ItemList } from './ItemList';
import { ItemCounts } from './ItemCounts';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setProductos(res);
        } else {
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
        }
      });
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <h1>Productos</h1>
      <ItemList productos={productos} />
      <ItemCounts initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
    </div>
  )
}
