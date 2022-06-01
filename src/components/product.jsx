import React, { Component } from 'react';


class Product extends Component {
    count = 5;
    state = {}
    render() {
        // const list = ['item 1', 'item 2', 'item 3'];

        return (
            <>
                <span className='m-2 text-info'>product name</span>
                <span className='m-2 badge bg-primary'>{this.count === 0 ? 'zero' : this.count}</span>
                <button onClick={this.handleIncrement} className='m-2 btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn-sm btn-warning'>-</button>
                <button onClick={() => { this.handleDelete(55) }} className='m-2 btn-sm btn-danger'>delete</button>
            </>
        );
    }

    handleIncrement = () => {
        console.log('increment');
    }

    handleDecrement = () => {
        console.log('decrement');
    }

    handleDelete = (itemNumber) => {
        console.log(itemNumber);
    }
}

export default Product;