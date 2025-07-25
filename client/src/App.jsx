import React from 'react'
import NavBar from './components/NavBar'
import { Route,Routes, useLocation } from 'react-router-dom'
import MainBanner from './components/MainBanner'
import Home  from './pages/Home'

const App = () => {

  const isSellorPath =useLocation().pathname.includes("seller")
  return (
    <div>
  {isSellorPath ? null :<NavBar></NavBar>}
<div className={`${isSellorPath}? "" : "px-6 md:px-16 lg:px-24 xl:px-32"`}>
  <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
  </Routes>
</div>
    </div>
  )
}

export default App
