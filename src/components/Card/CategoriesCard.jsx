import './CategoriesCard.css'

function CategoriesCard({ categoryName }) {
    console.log(categoryName)
    return (
        <div className="cardContainer">
            <div className="title">{categoryName}</div>
        </div>
    )
}

export default CategoriesCard
