import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import CSEFLIX from '../assets/CSEFLIX-logo.svg'
import Vector from '../assets/Vector.svg'
import { useState } from 'react';

function Navbar(){
 const [searchText, setSearchText] = useState("");
 const [changeColorPopular, setChangeColorPopular] = useState(false);
 const [changeColorCategories, setChangeColorCategories] = useState(false);
 let location = useLocation();
 console.log(location.pathname);
 
 function handleClick(){
    
    /*if(location.pathname === "/popular"){
    setChangeColorPopular(true);
    console.log(changeColorPopular);
    }else {
        setChangeColorPopular(false);
    }
    if(location.pathname === "/categories"){
        setChangeColorCategories(true);
    }else{
        setChangeColorCategories(false);
        
    }*/
 }
   

    return(
       <nav className='nav-container'>
           <Link to="/" >
            <img className='logo' src={CSEFLIX}/>
           </Link>
           <div className='titles'>
            <Link to="/popular"  className={location.pathname === "/popular" ? "title-clicked" : "title-notClick"}  >Popular</Link>
            <Link to="/categories" className={location.pathname === "/categories" ? "title-clicked" : "title-notClick"} >Categories</Link>
           </div>
           <div className='search-container'>
           <input 
           className='search-box'
            type="text"
            value={searchText}
            onChange={(event) =>{setSearchText(event.target.value)}}
            placeholder="Search..." />
           <img className='Vector' src={Vector} /*onClick={searchFunction}*//>
           
           </div>
      </nav>
    )
}

export default Navbar;