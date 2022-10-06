import React from 'react';
import './Header.css';
//import SearchIcon from '../src/images/search_icon.png';
import ShoppingBasketIcon from '../src/images/shopping-basket.png';
import Logo from "../src/images/logo.png";
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider.js"
import { auth } from './firebase.js';
import './AdminHeader.css'


function AdminHeader() {
  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header"> 
        <Link to="/"><img className="header__logo" src={Logo} alt=""/></Link>
        
        {/* <div className="header__search">
            <input className="header__searchInput" type="text" />
            <img className ="header__searchIcon" src={SearchIcon} alt=''/> 
        </div> */}
        <div>
          <Link to ='/editproduct'><button className='edit__button'>EditProduct</button></Link>
        </div>
        <div>
          <Link to ='/editbestdish'><button className='edit__button'>EditBestDish</button></Link>
        </div>
        <div className="header__nav">
          <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineone'>Hello {!user?'Guest':user.email} </span>
              <span className='header__optionLinetwo'>{user?'Sign Out': 'Sign In'} </span>     
            </div>
          </Link>
          <Link to ="/checkout">
            <div className='header__option'>
              <span className='header__optionLineone'>Orders </span>    
            </div>
            <div className='header__option'>
              <span className='header__optionLineone'>Your Profile </span>               
            </div>
            </Link>
            <Link to="/checkout">
              <div className='header__optionBasket'>
                  <img className='header__basket' src={ShoppingBasketIcon} alt=""/>
                  <span className='header__optionLinetwo  header__basketCount'>{basket?.length}</span>
              </div>
            </Link>
           
        </div>

    </div>
  )
}

export default AdminHeader;