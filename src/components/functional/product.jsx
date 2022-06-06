import React, { useContext } from "react";
import ProductContext from "../../context/products";

const Product = (props) => {
    const productContext = useContext(ProductContext);
    return (
        <div>
            <span className='m-2 text-info'>{props.productName}</span>
            <span className='m-2 badge bg-primary'>{props.count === 0 ? 'zero' : props.count}</span>
            <button onClick={handleIncrement} className='m-2 btn-sm btn-success'>+</button>
            <button onClick={handleDecrement} className='m-2 btn-sm btn-warning'>-</button>
            <button onClick={handleDelete} className='m-2 btn-sm btn-danger'>delete</button>
        </div>
    );

    function handleIncrement() {
        productContext.onIncrement(props.id);
    }

    function handleDecrement() {
        productContext.onDecrement(props.id);
    }

    function handleDelete() {
        productContext.onDelete(props.id);
    }
}

export default Product;
