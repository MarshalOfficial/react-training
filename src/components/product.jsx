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
                <button className='m-2 btn-sm btn-success'>+</button>
                <button className='m-2 btn-sm btn-warning'>-</button>
                <button className='m-2 btn-sm btn-danger'>delete</button>
                {/* <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul> */}
            </>
        );
    }

    // format() {
    //     if (this.count === 0) {
    //         return 'zero';
    //     }
    //     else {
    //         return this.count;
    //     }
    // }
}

export default Product;