import React, { useState } from "react";
import Navbar from "./navbar";
import Products from "./products";


const App = () => {
    const [products, setProducts] = useState([
        { id: 1, count: 2, productName: 'laptop' },
        { id: 2, count: 1, productName: 'phone' },
        { id: 3, count: 4, productName: 'airpods' }
    ]);

    return (
        <>
            <Navbar products={products} />
            <Products products={products} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} onReset={handleReset} />
        </>
    );

    function handleDelete(productId) {
        const newProducts = products.filter(p => p.id !== productId);
        setProducts(newProducts);
    }

    function handleIncrement(productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === productId);
        newProducts[index].count += 1;

        setProducts(newProducts);
    }

    function handleDecrement(productId) {
        const newProducts = [...products];
        const index = newProducts.findIndex(p => p.id === productId);
        newProducts[index].count -= 1;

        setProducts(newProducts);
    }

    function handleReset() {
        const newProducts = products.map(p => { p.count = 0; return p });
        setProducts(newProducts);
    }
}

export default App;