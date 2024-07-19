import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import Layout from "./layout/Layout"
import Contact from './pages/Contact'


function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout />} >
          <Route index element={<Navigate to={"/home"} />} />
          <Route path='/home' index element={<Landing />} />
          <Route path='/about' element={<Landing />} />
          <Route path='/services' element={<Landing />} />
          <Route path='/projects' element={<Landing />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
