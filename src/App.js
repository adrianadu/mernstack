import React, { useEffect } from 'react';
import './App.css';
import './Header.js'
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import {auth} from "./firebase.js";
import { useStateValue } from './StateProvider.js';
import Payment from './Payment.js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Dashboard from "./Dashboard.jsx"
import Footer from './Footer';
import AdminHeader from './AdminHeader.js';
import EditProduct from './EditProduct.js';
import EditBestDish from './EditBestDish.js';
import About from './About.js';

//import "./dark.css"


const promise = loadStripe('pk_test_51LP5LNSESBDYP8LK0gZsAmWEFa0vA5R7KWmJvej3sQzI40ZbVZaO7BvFht1i2gE2QmRkSzFAcL6PLI64k6MEyWIP00bjblpZ7d');

function App() {
  const [{},dispatch] = useStateValue();
  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser){
        dispatch({
          type:'SET_USER' , 
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])
  return (
    <Router>
      <div className="app dark">
        <Routes>
          <Route path="/login" element ={[<Login/>]}/>          
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path="/" element ={[<Header/>,<Home/>,<Footer/>]}/> 
          <Route path="/dashboard" element={[<AdminHeader/>,<Dashboard/>]}/>
          <Route path="/editproduct" element={[<EditProduct/>]}/>
          <Route path="/editbestdish" element={[<EditBestDish/>]}/>
          <Route path="/aboutus" element={[<Header/>,<About/>,<Footer/>]}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
