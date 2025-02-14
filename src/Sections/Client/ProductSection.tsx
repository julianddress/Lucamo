import { useState } from "react"
import { Button } from "@/Components/Shared/UI/button"
import { Filter, X } from "lucide-react"
import FilterSidebar from "@/Components/Client/FilterSideBar/FilterSideBar"
import ProductSort from "@/Components/Client/ProductSort/ProductSort"
import ProductGrid from "@/Components/Client/ProductGrid/ProductGrid"
import Pagination from "@/Components/Client/Pagination/Pagination"
import { useProductDetails } from "@/Hooks/Client/useProductDetails"
import ProductCardDetails from "@/Components/Client/ProductCardDetails/product-card-details"

export default function ProductSection() {

    const [showFilters, setShowFilters] = useState(false)
    const { showDetails, openDetails, closeDetails }  = useProductDetails();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Mobile filter button */}
                <Button 
                    variant="outline" 
                    className="lg:hidden mb-4" 
                    onClick={() => setShowFilters(!showFilters)}
                >
                    {showFilters ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
                    {showFilters ? "Close Filters" : "Show Filters"}
                </Button>

                {/* Filter sidebar */}
                <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden"} lg:block`}>
                    <FilterSidebar />
                </div>

                {/* Product display area */}
                <div className="lg:w-full">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm text-gray-600">Mostrando 1-24 de 100 productos</p>
                        <ProductSort />
                    </div>

                    <ProductGrid onShowDetails={openDetails} />
                    {showDetails && <ProductCardDetails onCloseDetails={closeDetails} />}
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

