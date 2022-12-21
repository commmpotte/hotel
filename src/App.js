import { Route, Routes,  BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './components/Home.jsx'
import Create from './components/Create'
import Details from './components/Details'
import NotFound from './components/NotFound'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp'
import UserAuthContext from './components/UserAuthContext';

function App() {
  return (
<UserAuthContext>
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
    </div>
    </UserAuthContext>
  )
}

export default App
