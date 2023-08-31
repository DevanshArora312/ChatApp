import { useState } from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import LoginPage from './pages/login';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/signup';

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<LandingPage/>} />
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
