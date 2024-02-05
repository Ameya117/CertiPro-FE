import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import CourseInfo from './components/CourseInfo'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Wishlist from './components/Wishlist'
import PurchasedCourses from './components/PurchasedCourses'

//ADD DASHBOARD - MY COURSES

const App = () => {
  return (
    <>
    <Router>

      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/course/:id" element={<CourseInfo/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard key="default" element={<Wishlist/>}/>}></Route>
        <Route exact path="/dashboard/wishlist" element={<Dashboard key="wishlist" element={<Wishlist/>}/>}></Route>
        <Route exact path="/dashboard/purchased_courses" element={<Dashboard key="purchased_courses" element={<PurchasedCourses/>}/>}></Route>
    
      </Routes>
      {/* <Footer /> */}
    </Router>

  </>
  )
}

export default App
