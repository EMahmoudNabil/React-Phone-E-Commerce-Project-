import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data'


const  ProductContext =React.createContext();
//1- Provider
// 2- Consumer
class ProductProvider extends Component {
    state={
    products: [],
    detailProduct: detailProduct,
    }

    
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
        const singleItem = { ...item };
        products = [...products, singleItem];
        });
        this.setState(() => {
        return { products };
        }, this.checkCartItems);
    };
    
    handleDetail = () => {
        console.log("Hello From Details")
    }

    addToCart = () => {
        console.log("Hello From add to Card")
    }


    render() {
        return (
            <ProductContext.Provider value={{
                        ...this.state , 
                        handleDetail:this.handleDetail ,
                        addToCart:this.addToCart}}>
    
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider ,ProductConsumer} ;