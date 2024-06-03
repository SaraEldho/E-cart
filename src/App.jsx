import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Navigate } from "react-router-dom";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/wishlist"} element={<Wishlist />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
