import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path ='/Signup' element={<Signup/>}></Route>
        <Route path ='/Home' element={<Home/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
