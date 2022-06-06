import React from "react";
import Product from "./product";

const Products = (props) => {
    return (
        <>
            <button onClick={props.onReset} className='btn btn-primary'>Reset</button>
            {props.products.map((p, index) => (
                <Product onIncrement={props.onIncrement} onDecrement={props.onDecrement} onDelete={props.onDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
            )
            )}
        </>
    );
}

export default Products;