import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/:id" element={<Destinations />} />
      <Route path="/crew/:member" element={<Crew />} />
      <Route path="/technology" element={<Technology/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
