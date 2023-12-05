import './Card.css'

function Card({movie}){
    
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
    
    export default Card;