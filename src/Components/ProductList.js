import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Hello Product LIst</h3>
                <Product />
            </div>
        );
    }
}

export default ProductList;
