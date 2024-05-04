import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
import Home from './Home'
import Layout from './Layout/Layout'
import Test from '../public/Images/Test'
import Test1 from './Test1'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
        


        </Route>
        {/* Test */}
        <Route path='/test' element={<Test/>}/>
        <Route path='/test1' element={<Test1/>}/>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default MyRoutes