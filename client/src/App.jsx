import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './pages/Hero'
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Hero />} />
  </Route>
    </Routes>

  )
}

export default App
