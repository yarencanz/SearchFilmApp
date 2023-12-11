import './Card.css'

function TVseriesCard({ series }) {
    return (
        <div className="card_container">
            <div className="images_container">
                <img
                    src={`https://image.tmdb.org/t/p/original${series?.backdrop_path}`}
                    className="images"
                />
            </div>

            <div>{series?.name}</div>
        </div>
    )
}

export default TVseriesCard
