import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import MainBanner from "./components/MainBanner";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import Orders from "./pages/seller/Orders";
import ProductList from "./pages/seller/ProductList";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <NavBar></NavBar>}
      {showUserLogin ? <Login></Login> : null}
      <Toaster></Toaster>
      <div
        className={`${isSellerPath}? "" : "px-6 md:px-16 lg:px-24 xl:px-32"`}
      >
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {" "}
          </Route>
          <Route path="/products" element={<AllProducts></AllProducts>}></Route>
          <Route
            path="/products/:category"
            element={<ProductCategory></ProductCategory>}
          ></Route>
          <Route
            path="/products/:category/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/add-address"
            element={<AddAddress></AddAddress>}
          ></Route>
          <Route path="/my-orders" element={<MyOrders></MyOrders>}></Route>
          <Route
            path="/seller"
            element={
              isSeller ? (
                <SellerLayout></SellerLayout>
              ) : (
                <SellerLogin></SellerLogin> 
              )
            }
          >
            <Route
              index
              element={isSeller ? <AddProduct></AddProduct> : null}
            ></Route>
            <Route
            
              path="product-list"
              element={<ProductList></ProductList>}
            ></Route>
            <Route path="orders" element={<Orders></Orders>}></Route>
          </Route>
        </Routes>
      </div>

      {!isSellerPath && <Footer></Footer>}
    </div>
  );
};

export default App;
