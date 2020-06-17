import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data'


const  ProductContext =React.createContext();
//1- Provider
// 2- Consumer
class ProductProvider extends Component {
    state={
    products: storeProducts,
    detailProduct: detailProduct,
    }
    handleDetail = () => {
        console.log("Hello From Details")
    }

    addToCart = () => {
        console.log("Hello From add to Card")
    }
    tester = () => {
        console.log("State Products" , this.state.products[0].inCart)
        console.log("Date Products" , storeProducts[0].inCart)
        const tempProduct =[...this.state.products];
        tempProduct[0].inCart =true
        this.setState(()=>{
            return{ products : tempProduct}
        },()=>{
        console.log("State Products" , this.state.products[0].inCart)
        console.log("Date Products" , storeProducts[0].inCart)
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                        ...this.state , 
                        handleDetail:this.handleDetail ,
                        addToCart:this.addToCart}}>
            <button onClick={this.tester}> test me </button>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider ,ProductConsumer} ;