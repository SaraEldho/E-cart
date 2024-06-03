import React from "react";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { addToWishlist } from "./slice/wishlistSlice";
import { addToCart } from "./slice/cartSlice";
function Home() {
  const result = useFetch("https://dummyjson.com/products");
  console.log(result);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="row">
        {result?.length > 0
          ? result.map((product) => (
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
                      <p> {product.description.slice(0, 30)}</p>
                      Price:{product.price}
                    </MDBCardText>
                    <div className="d-flex justify-content-between">
                      <MDBBtn
                        className="bg-light text-danger fs-6 "
                        onClick={() => dispatch(addToWishlist(product))}
                      >
                        <FaHeart />
                      </MDBBtn>
                      <MDBBtn className="bg-light fs-6  text-success"
                      onClick={()=>dispatch(addToCart(product))}
>
                        <FaCartShopping />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))
          : "null"}
      </div>
    </div>
  );
}

export default Home;
