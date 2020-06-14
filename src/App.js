import React, { Component, Fragment } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'




class App extends Component{
  render(){
    return(
      <Fragment>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </Fragment>
      

    )
  }
}





export default App;
