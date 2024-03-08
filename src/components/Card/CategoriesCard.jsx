import './CategoriesCard.css'

function CategoriesCard({ categoryName }) {
    console.log(categoryName)
    return (
        <div className="cardContainer">
            <h1>{categoryName}</h1>
        </div>
    )
}

export default CategoriesCard
