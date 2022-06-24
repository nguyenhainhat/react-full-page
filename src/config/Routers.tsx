import React from 'react'
import {Routes, Route}  from 'react-router-dom'
import Home from '../pages/home/Home'


function RoutesPage() {
  return (
    
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default RoutesPage