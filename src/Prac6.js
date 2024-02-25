import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyCart from "./components/mycart";
import Login from "./components/Login"
import About from "./components/About"
import Contact from './components/Contact';
import Header from "./components/Header";
import { useState } from "react";
export default function Pract6() {
    const [addedCart, setAdddCart] = useState([]);
    const addedFun = (item) => {
        let temp = [...addedCart, item];
        setAdddCart(temp);
    }
    const removeItem = (index) => {
        let temp = [...addedCart];
        temp.splice(index, 1);
        setAdddCart(temp);
    }
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="" element={<Home purchaseItem={addedFun} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mycart" element={<MyCart purchaseItem={addedCart} deleteItem={removeItem} />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
