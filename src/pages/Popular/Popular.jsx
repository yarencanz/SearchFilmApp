import { useState, useEffect } from 'react'
import './Popular.css'
import '../../components/Navbar/Navbar.jsx'
import Slider from '../../components/Slider/Slider.jsx'
import '../../components/Slider/Slider.css'

function Popular({ movies }) {
    const [TVseries, setTVseries] = useState([])

    const options2 = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmMzNmQzYmQ1OWViYTQ5NGVjZTY3ZjRkYTY3MDc2NCIsInN1YiI6IjY1NjM0NGNlNzA2ZTU2MDBjNGJiOTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2uE30anBqd6H4A6dYGJ7qguv6oHPNJOkmpbPhDfKwM',
        },
    }

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
            options2
        )
            .then((response) => response.json())
            .then((response) => setTVseries(() => response?.results))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="slider_container">
            <div className="top_slider">
                <div className="slider_title">Popular Movies</div>
                <div>
                    <Slider itemArray={movies} type={true} />
                </div>
            </div>

            <div>
                <div className="slider_title">Popular TV Series</div>
                <div>
                    <Slider itemArray={TVseries} />
                </div>
            </div>
        </div>
    )
}

export default Popular
