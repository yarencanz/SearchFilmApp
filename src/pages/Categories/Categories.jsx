import { useEffect, useState } from 'react'
import CategoriesCard from '../../components/Card/CategoriesCard'
import './Categories.css'
import { Link } from 'react-router-dom'

function Categories() {
    const [categoriesList, setCategoriesList] = useState([])

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
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            options
        )
            .then((response) => response.json())
            .then((response) => setCategoriesList(() => response?.genres))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="categories">
            {categoriesList?.map((category, i) => (
                <Link to={`/category/${category?.id}`}>
                    {' '}
                    <CategoriesCard
                        key={`category${i}`}
                        categoryName={category?.name}
                    />{' '}
                </Link>
            ))}
        </div>
    )
}

export default Categories
