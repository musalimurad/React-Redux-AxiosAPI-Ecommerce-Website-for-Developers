import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const SiteRoutes = () => {
  return (
    <>
    <Routes>
      {/*page to page redirects here => app.js imported */}
        <Route exact path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default SiteRoutes