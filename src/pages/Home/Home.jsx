import './Home.css'
import Background from '../../components/Background/Background.jsx'
import star from '../../assets/star.svg'
import { useEffect, useState } from 'react'
import Slider from '../../components/Slider/Slider.jsx'

function Home({ movies }) {
    const [theathersMovies, setTheatherMovies] = useState([])
    const [airingToday, setAiringToday] = useState([])

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
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            options
        )
            .then((response) => response.json())
            .then((response) => setTheatherMovies(() => response?.results))
            .catch((err) => console.error(err))
    }, [])

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
            'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
            options2
        )
            .then((response) => response.json())
            .then((response) => setAiringToday(() => response?.results))
            .catch((err) => console.error(err))
    }, [])

    let movie = Math.floor(Math.random() * 20)
    return (
        <div>
            <Background movies={movies} movie={movie} />
            <div className="movie_name">{movies[movie]?.title}</div>
            <div className="imdb_container">
                <img src={star} className="star_logo" />
                <div className="imdb_point">
                    {Math.floor(movies[movie]?.vote_average * 10) / 10}/10
                </div>
            </div>

            <div className="slider_container_home">
                <div className="top_slider_home">
                    <div className="slider_title">Movies in Theaters</div>
                    <div>
                        <Slider itemArray={theathersMovies} type={true} />
                    </div>
                </div>

                <div>
                    <div className="slider_title">Airing Today</div>
                    <div>
                        <Slider itemArray={airingToday} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
