import '../App.css'
import CSEFLIX from '../assets/CSEFLIX-logo.svg'

function Navbar(){
    return(
       <nav className='nav-container'>
           <div >
            <img className='logo' src={CSEFLIX} />
           </div>
           <div className='titles'>
            <h1>Popular</h1>
            <h1>Categories</h1>
           </div>
           <input
           className='search-box'
            type="text"
            //value={searchText}
            //onChange={handleSearchChange}
            placeholder="Search..."

           />
      </nav>
    )
}

export default Navbar;