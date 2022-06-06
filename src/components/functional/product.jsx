import React from "react";

const Product = (props) => {
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
        props.onIncrement(props.id);
    }

    function handleDecrement() {
        props.onDecrement(props.id);
    }

    function handleDelete() {
        props.onDelete(props.id);
    }
}

export default Product;
