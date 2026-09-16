import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Payment from './Pages/Payment'

const App = () => {
  return (
   <>
   <Router>
    <Routes>

<Route path='/' element={<Home/>} />
<Route path='/payment' element={<Payment/>}/>

    </Routes>
   </Router>
   </>
  )
}

export default App