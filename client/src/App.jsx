import React from 'react'
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './Pages/About';
import SignIn from './pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './pages/Profile';
import Header from './Component/Header';


function App() {
  return (
    <>
       <BrowserRouter>
                <Header/>
                <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/About' element={<About />}/>
                        <Route path='/Sign-In' element={<SignIn />}/>
                        <Route path='/Sign-Up' element={<SignUp />}/>
                        <Route path='/Profile' element={<Profile />}/>
                </Routes>

      </BrowserRouter>
    </>
    
  )
}

export default App