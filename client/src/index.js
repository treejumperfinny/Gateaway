import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './components/Home'
import Logon from './components/Logon'
import Register from './components/Register'
import Flight from './components/Flight'
import Airports from './components/Airports'
import Starting from './components/Starting'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/welcome" element={<Home />} />
          <Route path="/logon" element={<Logon />} />
          <Route path="/register" element={<Register />} />
          <Route path="/flights" element={<Flight />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/letsgo" element={<Starting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)




