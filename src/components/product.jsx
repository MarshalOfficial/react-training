import React, { Component } from 'react';
import ProductContext from '../context/products';


class Product extends Component {
    static contextType = ProductContext;
    render() {
        return (
            <div>
                <span className='m-2 text-info'>{this.props.productName}</span>
                <span className='m-2 badge bg-primary'>{this.props.count === 0 ? 'zero' : this.props.count}</span>
                <button onClick={this.handleIncrement} className='m-2 btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn-sm btn-danger'>delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.context.onIncrement(this.props.id);
    }

    handleDecrement = () => {
        this.context.onDecrement(this.props.id);
    }

    handleDelete = () => {
        this.context.onDelete(this.props.id);
    }
}

export default Product;