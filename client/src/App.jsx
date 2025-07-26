import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes, useLocation } from 'react-router-dom'
import MainBanner from './components/MainBanner'
import Home  from './pages/Home'
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'

const App = () => {

  const isSellerPath =useLocation().pathname.includes("seller")
  return (
    <div>
  {isSellerPath ? null :<NavBar></NavBar>}
  <Toaster></Toaster>
<div className={`${isSellerPath}? "" : "px-6 md:px-16 lg:px-24 xl:px-32"`}>
  <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
  </Routes>
</div>

{!isSellerPath && <Footer></Footer> }
    </div>
  )
}

export default App
