import Navbar from './navbar';
import Products from './products';
import React, { Component } from 'react';
import ProductContext from '../context/products';

class App extends Component {
  state = {
    products: [
      { id: 1, count: 2, productName: 'laptop' },
      { id: 2, count: 1, productName: 'phone' },
      { id: 3, count: 4, productName: 'airpods' }
    ]
  }

  render() {
    console.log('app render');
    return (
      <>
        <ProductContext.Provider
          value={{
            products: this.state.products,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onDelete: this.handleDelete,
            onReset: this.handleReset,
          }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
      </>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter(p => p.id !== productId);
    this.setState({ products: newProducts });
  }

  handleIncrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex(p => p.id === productId);
    newProducts[index].count += 1;

    this.setState({ products: newProducts });
  }

  handleDecrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex(p => p.id === productId);
    newProducts[index].count -= 1;

    this.setState({ products: newProducts });
  }

  handleReset = () => {
    const newProducts = this.state.products.map(p => { p.count = 0; return p });
    this.setState({ products: newProducts });
  }
}

export default App;
