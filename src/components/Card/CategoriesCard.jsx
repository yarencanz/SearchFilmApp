import './CategoriesCard.css'

function CategoriesCard({ categoryName }) {
    return (
        <div className="cardContainer">
            <h1>{categoryName}</h1>
        </div>
    )
}

export default CategoriesCard
