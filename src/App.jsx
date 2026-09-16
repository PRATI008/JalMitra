import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
<<<<<<< HEAD
import Splash from './Pages/Splash'
import Welcome from './Pages/Welcome'
=======
import Payment from './Pages/Payment'
import MyProfile from './Pages/MyProfile'
>>>>>>> 35c96d63e683824597257f62e4d2139ecbbf7987

const App = () => {
  return (
    <Router>
      <Routes>

<<<<<<< HEAD
<Route path='/' element={<Splash/>} />
<Route path='/welcome' element={<Welcome/>} />

<Route path='/home' element={<Home/>} />
=======
        <Route path='/' element={<Home />} />
>>>>>>> 35c96d63e683824597257f62e4d2139ecbbf7987

        <Route path='/payment' element={<Payment />} />

        <Route path='/myprofile' element={<MyProfile />} />

      </Routes>
    </Router>
  )
}

export default App