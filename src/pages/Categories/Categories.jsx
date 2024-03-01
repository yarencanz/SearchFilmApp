import CategoriesCard from '../../components/Card/CategoriesCard'
import './Categories.css'
function Categories() {
    const categoriesArray = [
        'Comedy',
        'Action',
        'Love',
        'Horror',
        'Dram',
        'Science',
    ]
    return (
        <div className="categories">
            {categoriesArray.map((e) => (
                <CategoriesCard key={0} categoryName={e} />
            ))}
        </div>
    )
}

export default Categories
