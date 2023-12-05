import "./Slider.css";
import Card from "../Card/Card.jsx";

function Slider({movies}){
    
   return(<div className="slider">
      { movies.map(movie => <Card key={movie?.id} movie={movie}/>)}
        </div>
   )
   }
   
   export default Slider;