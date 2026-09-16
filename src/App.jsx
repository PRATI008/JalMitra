import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Splash from './Pages/Splash'
import Welcome from './Pages/Welcome'

const App = () => {
  return (
   <>
   <Router>
    <Routes>

<Route path='/' element={<Splash/>} />
<Route path='/welcome' element={<Welcome/>} />

<Route path='/home' element={<Home/>} />

    </Routes>
   </Router>
   </>
  )
}

export default App