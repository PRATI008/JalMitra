import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
import Splash from './Pages/Splash'
import Welcome from './Pages/Welcome'
import MyProfile from './Pages/MyProfile'
import TrackOrder from './Pages/TrackOrder'
import SearchBar from './Pages/SearchBar'
import SupplierDetails from './Pages/SupplierDetails'
import Orders from './Pages/Orders'
import CustomerDetails from './Pages/CustomerDetails'
import MyPayment from './Pages/MyPayment'
import OrderComfirmation from './Pages/OrderComfirmation'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
         <Route path='/search-bar' element={<SearchBar />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/track-order' element={<TrackOrder />} />
        <Route path='/payment' element={<MyPayment/>} />
       
        <Route path='/supplier/:id' element={<SupplierDetails />} />
        <Route path='/customer' element={<CustomerDetails />} />
        <Route path='/order-comfirmation' element={<OrderComfirmation/>} />
      </Routes>
    </Router>
  )
}

export default App