import React, { Component } from 'react'

const  ProductContext =React.createContext();
//1- Provider
// 2- Consumer
class productProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="Hello From Context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {productProvider ,ProductConsumer} ;