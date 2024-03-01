import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Popular from './pages/Popular/Popular.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { useEffect, useState } from 'react'
import MoviePage from './pages/MoviePage/MoviePage.jsx'

function App() {
    const [movies, setMovies] = useState([])
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
            'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            options
        )
            .then((response) => response.json())
            .then((response) => setMovies(() => response?.results))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home movies={movies} />} />
                <Route path="/popular" element={<Popular movies={movies} />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/moviePage" element={<MoviePage />} />
            </Routes>
        </div>
    )
}

export default App
