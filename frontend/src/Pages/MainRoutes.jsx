import React from 'react'
import {Routes, Route} from "react-router-dom"
import ReqAuth from '../Components/ReqAuth'
import LandingPage from './LandingPage'
import Login from './Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/home' element={<LandingPage/>}  />
      
    </Routes>
  )
}

export default MainRoutes
