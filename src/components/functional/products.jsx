import React, { useContext } from "react";
import Product from "./product";
import ProductContext from "../../context/products";

const Products = (props) => {
    const productContext = useContext(ProductContext);
    return (
        <>
            <button onClick={productContext.onReset} className='btn btn-primary'>Reset</button>
            {productContext.products.map((p, index) => (
                <Product id={p.id} key={index} productName={p.productName} count={p.count} />
            )
            )}
        </>
    );
}

export default Products;