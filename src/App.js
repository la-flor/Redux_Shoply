import './App.css';
import React from "react";
import ProductList from './ProductList';
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart />
        <ProductList />
      </header>
    </div>
  );
}

export default App;