import './CategoriesDetails.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MovieCard from '../../components/Card/MovieCard'

function CategoriesDetails() {
    const { categoryID } = useParams()
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmMzNmQzYmQ1OWViYTQ5NGVjZTY3ZjRkYTY3MDc2NCIsInN1YiI6IjY1NjM0NGNlNzA2ZTU2MDBjNGJiOTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2uE30anBqd6H4A6dYGJ7qguv6oHPNJOkmpbPhDfKwM',
            },
        }

        fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&genres=${categoryID}`,
            options
        )
            .then((response) => response.json())
            .then((response) => setCategoryData(() => response?.results))
            .catch((err) => console.error(err))
    }, [categoryID])

    console.log('catfilms=', categoryData)

    return (
        <div className="detailsContainer">
            {categoryData?.map((movie, i) => (
                <MovieCard key={`movie${i}`} movie={movie} />
            ))}
        </div>
    )
}
export default CategoriesDetails
