import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './Pages/Home'
import Splash from './Pages/Splash'
import Welcome from './Pages/Welcome'
import MyProfile from './Pages/MyProfile'
<<<<<<< HEAD
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
=======
import SearchBar from './Pages/SearchBar'
import SupplierDetails from './Pages/SupplierDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/search-bar' element={<SearchBar />} />
        <Route path='/supplier/:id' element={<SupplierDetails />} />
      </Routes>
    </Router>
>>>>>>> 9a996a9fe11bdcc6467b5136c45c973ad3cc9caf
  )
}

export default App