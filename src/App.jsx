import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import MyProfile from './Pages/MyProfile'
import TrackOrder from './Pages/TrackOrder'

const App = () => {
  return (
   <>
   <Router>
    <Routes>

<Route path='/' element={<Home/>} />
<Route path='/my-profile' element={<MyProfile/>} />
<Route path='/trackorder'   element={<TrackOrder/>}/>
    </Routes>
   </Router>
   </>
  )
}

export default App