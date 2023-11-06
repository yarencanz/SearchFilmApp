import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Popular from './pages/Popular'
import Navbar from './components/Navbar.jsx'

function App() {
 
  return (
   <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/categories" element={<Categories/>}/>
     </Routes>
   </div>
     
    

  )

}

export default App
