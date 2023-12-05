import { useState, useEffect } from "react";
import "./Popular.css"
import "../../components/Navbar/Navbar.jsx"
import Slider from "../../components/Slider/Slider.jsx";


function Popular(){
    const[movies,setMovies] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmMzNmQzYmQ1OWViYTQ5NGVjZTY3ZjRkYTY3MDc2NCIsInN1YiI6IjY1NjM0NGNlNzA2ZTU2MDBjNGJiOTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2uE30anBqd6H4A6dYGJ7qguv6oHPNJOkmpbPhDfKwM'
        }
      }
      
      useEffect(() => {

         fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => setMovies(() => response?.results))
        .catch(err => console.error(err));

      },[])
      
      
    return(
      <div className="slider_container">

      <div className="popular_movie">
      <div className="slider_title">
        Popular Movies
      </div>
        <div>
          <Slider movies={movies}/>
        </div>
        </div>

        <div className="popular_TVseries">
        <div className="slider_title">
        Popular TV Series
        </div>
        </div>

        </div>
    )
}

export default Popular;