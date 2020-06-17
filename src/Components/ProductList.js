import React, { Component, Fragment } from 'react';
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../api/context'

class ProductList extends Component {
    render() {
        // console.log(this.state.products)
        return (
            <Fragment>
                <div className="py-5">
                <div className="container">
                    <Title name="Our" title="Products" />

                <div className="row">
                    <ProductConsumer>
                        {(value)=>{
                            console.log(value)
                            return value.products.map(product => {
                                return <Product key={product.id}  product={product} />
                            })
                        }}
                    </ProductConsumer>
                </div>
                </div>

                </div>
            </Fragment>
        );
    }
}

export default ProductList;
