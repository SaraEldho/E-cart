import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { deleteFromWishlist } from "./slice/wishlistSlice";
import { addToCart } from "./slice/cartSlice";
function Wishlist(product) {
  const wishlist = useSelector((state) => state.wishlistReducer);
  console.log(wishlist);
  const dispatch = useDispatch();
  const handleWishlist=(product)=>
    {dispatch(addToCart(product))
      dispatch(deleteFromWishlist(product.id))
    }
  return (
    <div className="row">
      {wishlist?.length > 0
        ? wishlist.map((product) => (
            <div className="col ">
              <MDBCard
                style={{ width: "300px", height: "640px", margin: "20px" }}
              >
                <MDBCardImage
                  src={product.thumbnail}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText>
                    <p> {product.description}</p>
                    Price:{product.price}
                  </MDBCardText>
                  <div className="d-flex justify-content-between">
                    <MDBBtn
                      className="bg-light text-danger fs-6 "
                      onClick={() => dispatch(deleteFromWishlist(product.id))}
                    >
                      <MdDelete />
                    </MDBBtn>
                    <MDBBtn  onClick={() => dispatch(handleWishlist(product))}
                     className="bg-light fs-6  text-success">
                      <FaCartShopping />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))
        : "null"}
    </div>
  );
}

export default Wishlist;
