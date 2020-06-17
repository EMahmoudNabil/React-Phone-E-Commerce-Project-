import React, { Component, Fragment } from 'react';
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../api/data'

class ProductList extends Component {
    state = {
        products: storeProducts
    };
    render() {
        console.log(this.state.products)
        return (
            <Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="Our" title="Products" />
                <div className="row">
                    <h3>Hello</h3>
                </div>
                </div>

                </div>
            </Fragment>
        );
    }
}

export default ProductList;
