import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./Component/ProductDetail";
import SearchItem from "./Component/SearchItem";
import Cart from "./Component/Cart";
import { items } from "./Component/Data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setData] = useState([...items]);

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
