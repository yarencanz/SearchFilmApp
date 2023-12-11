import { useEffect, useState } from 'react'
import './Home.css'
import Background from '../../components/Background/Background.jsx'

function Home() {
    const [mainMovie, setMainMovie] = useState([])

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
            'https://api.themoviedb.org/3/trending/all/day?language=en-US',
            options
        )
            .then((response) => response.json())
            .then((response) => setMainMovie(() => response?.results))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <div>
                <Background />
            </div>
        </div>
    )
}

export default Home
