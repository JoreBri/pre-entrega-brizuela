import { ItemCounts } from "./components/ItemCounts"
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"

import "./css/main.css"

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting={"Productos"}/>
      <ItemCounts initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada" , quantity)}/>
    </>
  )
}

export default App
