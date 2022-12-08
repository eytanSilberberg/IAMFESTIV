import React from 'react'
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'

// CMPS
import { AppHeader } from './cmps/app.header'
import './assets/styles/style.scss';



export default function App() {
  return (

    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <Routes>
          {routes.map(route => <Route key={route.path} element={<route.element />} path={route.path} />)}
        </Routes>
      </div>
    </BrowserRouter>
  )
}