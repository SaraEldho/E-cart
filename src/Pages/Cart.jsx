import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Row,Col} from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { deleteFromCart } from './slice/cartSlice';
import { Table } from 'react-bootstrap';
import { emptyCart } from './slice/cartSlice';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';


function Cart() {
  const cart = useSelector((state) => state. addtocartReducer);
  console.log(cart);
  const dispatch = useDispatch();
  const [Total,setTotal]=useState("")
  const getCartTotal=()=>{
    if(cart.length>0){
      setTotal(cart.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    getCartTotal()},[cart]
  )
  const handleCart=()=>{
    dispatch(emptyCart())
    alert("placed")
  }
  return (
    <div className='mt-5'>
      <Row className="d-flex justify-content-evenly">
        <Col className='me-5'>
          <Table striped bordered hover size='sm' className='m-5'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {cart?.length > 0
        ? cart.map((product,index) => (
          <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img src={product.thumbnail} width={'100px'} height={"70px"}/></td>
                <td>{product.price}</td>
                <td> <MDBBtn
                      className="bg-light text-danger fs-6 "
                      onClick={() => dispatch(deleteFromCart(product.id))}
                    >
                      <MdDelete />
                    </MDBBtn></td>
              </tr>
          ))
        : "null"}
            
            </tbody>
          </Table>
        </Col>
        <Col className='m-5 border shadow d-flex justify-content-evenly '>
        <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card Summary</MDBCardTitle>
        <MDBCardText>
         <p>Total Cart Item:{cart.length}</p>
         <p>Total Price:{Total}</p>
        </MDBCardText>
        <MDBBtn onClick={()=>handleCart()}
        >Checkout</MDBBtn>
      </MDBCardBody>
    </MDBCard> 
        </Col>
      </Row>
    </div>
  
  )
}

export default Cart