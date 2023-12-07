import './Card.css'

function MovieCard({movie}){
    
    return(
    <div className="card_container">
        
        <div className="images_container"> 
        <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="images"/>
        </div>

        <div>
        {movie?.title}
        </div>
       
        
    </div>
    )
    }
    
    export default MovieCard;