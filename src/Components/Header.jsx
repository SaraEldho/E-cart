import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist=useSelector((state)=>state. wishlistReducer)
  const cart=useSelector((state)=>state. addtocartReducer)
  console.log(wishlist);
  console.log(cart);
  return (
    <div><MDBNavbar light bgColor='light'>
    <MDBContainer>
      <MDBNavbarBrand href='#'>
      <CiShoppingCart className='fs-1 me-1'/> 
     <h4 className='mt-2'> E-CART</h4>
      </MDBNavbarBrand>
      <div className='d-flex justify-content-end '>
        <Link to="/wishlist">
          <div className='row me-5'>
          <FaHeart style={{color:"red"}} className='fs-3'/>
          <button  className='rounded p-0 mt-1'>{wishlist.length}</button>
          </div>
        </Link>
        <Link to="/cart">
          <div className='row'>
          < FaCartShopping  style={{color:"green"}} className='fs-3'/>
          <button className='rounded p-0 mt-1'>{cart.length}</button>
          </div>
        </Link>
      </div>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header