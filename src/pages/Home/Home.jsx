import './Home.css'
import Background from '../../components/Background/Background.jsx'
import star from '../../assets/star.svg'

function Home({ movies }) {
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
        </div>
    )
}

export default Home
