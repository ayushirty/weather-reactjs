import React from 'react';
// import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Countryy from './Countryy'
import Nav from './Nav'
import Weather from './Weather'

const App = () => {
  const navigate = useNavigate()

  return (
    <div>
      
      <Routes>
        <Route path='/country' element={<Countryy/>}/>
        <Route path='/weather/:capital' element={<Weather/>}/>
        <Route path='/' element={<Nav navigate={navigate}/>}/>
      </Routes>
      
    </div>
  )
}


export default App;
