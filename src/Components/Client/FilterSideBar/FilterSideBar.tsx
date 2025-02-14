import CategoryFilter from "../Filters/CategoryFilter/CategoryFilter";
import DiscountFilter from "../Filters/DiscountFilter/DiscountFilter";
import PriceFilter from "../Filters/PriceFilter/PriceFilter";
import SubcategoryFilter from "../Filters/SubcategoryFilter/SubcategoryFilter";


export default function FilterSidebar() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            <CategoryFilter />
            <SubcategoryFilter />
            <PriceFilter />
            <DiscountFilter />
        </div>
    )
}

