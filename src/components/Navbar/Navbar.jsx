import { Link, json, useLocation } from 'react-router-dom'
import './Navbar.css'
import CSEFLIX from '../../assets/CSEFLIX-logo.svg'
import Vector from '../../assets/Vector.svg'
import { useEffect, useState } from 'react'
import '../../pages/Popular/Popular.jsx'

function Navbar() {
    const [searchText, setSearchText] = useState('')
    let location = useLocation()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmMzNmQzYmQ1OWViYTQ5NGVjZTY3ZjRkYTY3MDc2NCIsInN1YiI6IjY1NjM0NGNlNzA2ZTU2MDBjNGJiOTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2uE30anBqd6H4A6dYGJ7qguv6oHPNJOkmpbPhDfKwM',
        },
    }
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/search/multi?query=${searchText}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((response) => response.json())
            .then((response) => setSearchText(() => response?.results))
            .then((response) => setSearchText((response) => ''))
            .catch((err) => console.error(err))
    }, [])

    console.log(searchText)
    return (
        <nav className="nav-container">
            <Link to="/">
                <img className="logo" src={CSEFLIX} />
            </Link>
            <div className="titles">
                <Link
                    to="/popular"
                    className={
                        location.pathname === '/popular'
                            ? 'title-clicked'
                            : 'title-notClick'
                    }
                >
                    {' '}
                    Popular
                </Link>
                <Link
                    to="/categories"
                    className={
                        location.pathname === '/categories'
                            ? 'title-clicked'
                            : 'title-notClick'
                    }
                >
                    Categories
                </Link>
            </div>
            <div className="search-container">
                <input
                    className="search-box"
                    type="text"
                    value={searchText}
                    onChange={(event) => {
                        setSearchText(event.target.value)
                    }}
                    placeholder="Search..."
                    onKeyDown={(e) => {
                        if (e.code == 'Enter') {
                        }
                    }}
                />
                <Link to={'/moviePage'}>
                    <img
                        className="Vector"
                        src={Vector}
                        onClick={() => {
                            
                        }}
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
