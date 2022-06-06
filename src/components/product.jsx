import React, { Component } from 'react';


class Product extends Component {
    state = {
        count: this.props.count,
    }

    render() {
        return (
            <div>
                <span className='m-2 text-info'>{this.props.productName}</span>
                <span className='m-2 badge bg-primary'>{this.state.count === 0 ? 'zero' : this.state.count}</span>
                <button onClick={this.handleIncrement} className='m-2 btn-sm btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn-sm btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn-sm btn-danger'>delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        console.log(this.state);
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
        console.log(this.state);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
}

export default Product;