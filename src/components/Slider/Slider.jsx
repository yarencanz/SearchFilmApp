import MovieCard from '../Card/MovieCard'
import TVseriesCard from '../Card/TVseriesCard'
import './Slider.css'

function Slider({ itemArray, type }) {
    console.log('itemArray', itemArray)

    return (
        <div className="slider">
            {itemArray.map((item) =>
                type === true ? (
                    <MovieCard key={item?.id} movie={item} />
                ) : (
                    <TVseriesCard key={item?.id} series={item} />
                )
            )}
        </div>
    )
}

export default Slider
