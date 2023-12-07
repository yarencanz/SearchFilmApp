import "./Slider.css";
import MovieCard from "../Card/MovieCard.jsx";
import TVseriesCard from "../Card/TVseriesCard.jsx";

function Slider(props){
    
   return(<div className="slider">
      {props.itemArray.map(props.type === true ? 
      (movie => <MovieCard key={movie?.id} movie={movie}/>) : 
      (series => <TVseriesCard key={series?.id} series={series}/>))}
        </div>
   )
   }
   
   export default Slider;