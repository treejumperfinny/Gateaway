import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import Home from './components/Home'
import Logon from './components/Logon';
import Register from './components/Register';
import Flights from './components/Flights';
import Airports from './components/Airports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/welcome" element={<Home />} />
          <Route path="/logon" element={<Logon />} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="/flights" element={<Flights />} />
          <Route path="/airports" element={<Airports />} />           
        </Route>
      </Routes>
    </BrowserRouter>

)




