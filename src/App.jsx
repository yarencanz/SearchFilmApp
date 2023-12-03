import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/Popular/Popular.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

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
