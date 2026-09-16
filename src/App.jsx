import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
import Payment from './Pages/Payment'
import MyProfile from './Pages/MyProfile'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/payment' element={<Payment />} />

        <Route path='/myprofile' element={<MyProfile />} />

      </Routes>
    </Router>
  )
}

export default App