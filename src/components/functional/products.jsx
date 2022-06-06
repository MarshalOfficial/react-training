import React, { useState } from "react";
import Product from "./product";

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, count: 2, productName: 'laptop' },
        { id: 2, count: 1, productName: 'phone' },
        { id: 3, count: 4, productName: 'airpods' }
    ]);

    return (
        <>
            {products.map((p, index) => (
                <Product key={index} productName={p.productName} count={p.count}>
                    <p>children prop we can pass element text and etc.</p>
                </Product>
            )
            )}
        </>
    );
}

export default Products;