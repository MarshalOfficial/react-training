import React, { Component } from 'react';


class Product extends Component {
    state = {
        count: 0,
        productName: 'laptop'
    }

    render() {
        // const list = ['item 1', 'item 2', 'item 3'];

        return (
            <>
                <span className='m-2 text-info'>{this.state.productName}</span>
                <span className='m-2 badge bg-primary'>{this.state.count === 0 ? 'zero' : this.state.count}</span>
                <button onClick={this.handleIncrement} className='m-2 btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn-sm btn-danger'>delete</button>
            </>
        );
    }

    handleIncrement = () => {
        console.log('increment');
    }

    handleDecrement = () => {
        console.log('decrement');
    }

    handleDelete = () => {
        console.log('delete');
    }
}

export default Product;