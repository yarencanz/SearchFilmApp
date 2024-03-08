import { useEffect, useState } from 'react'
import CategoriesCard from '../../components/Card/CategoriesCard'
import './Categories.css'

function Categories() {
    const [elements, setElements] = useState([])

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
            .then((response) => setElements(() => response?.genres))
            .catch((err) => console.error(err))
    }, [])
    console.log(elements)
    return (
        <div className="categories">
            {elements?.map((e, i) => (
                <CategoriesCard key={`category${i}`} categoryName={e?.name} />
            ))}
        </div>
    )
}

export default Categories
