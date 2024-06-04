import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Footer } from "./components/Footer"
import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"

import "./css/main.css"
import ItemDetailContainer from "./components/ItemDetailConteiner";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element= {<ItemListContainer greeting={"Productos"}/>}/>
      <Route path="/category/:categoryId" element= {<ItemListContainer/>}/>
      <Route path="/item/:itemId" element= {<ItemDetailContainer/>}/>
      <Route path="/*" element= {<NotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
