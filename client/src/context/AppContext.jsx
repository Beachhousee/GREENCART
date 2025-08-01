import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  //Fetch  all Products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  //Add Product to Cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart  ");
  };

  //Update Cart Item quantity

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  // Remove Product from Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if(cartData[itemId]===0){
        delete cartData[itemId];
      }
    }
    toast.success("remove from cart")
    setCartItems(cartData)
  };

const getCartCount = () => {
  let totalCount = 0;
  for (const item in cartItems) {
    totalCount += cartItems[item];
  }
  return totalCount;
}

// Get Cart Total Amount
const getCartAmount = () => {
  let totalAmount = 0;
  for (const items in cartItems) {
    let itemInfo = products.find((product) => product._id === items);
    if (cartItems[items] > 0) {
      totalAmount += itemInfo.offerPrice * cartItems[items];
    }
  }
  return Math.floor(totalAmount * 100);
}


  useEffect(() => {
    fetchProducts();
  }, []); // it will fetch at starting


  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart ,
    cartItems,
    searchQuery,setSearchQuery,
    getCartAmount,getCartCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const  useAppContext = () => {
  return useContext(AppContext);
};
