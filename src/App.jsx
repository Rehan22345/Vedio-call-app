import { useState } from 'react'

import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './Components/Home'
import Vedio from './Components/Vedio'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/vedio/:id' element={<Vedio/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
