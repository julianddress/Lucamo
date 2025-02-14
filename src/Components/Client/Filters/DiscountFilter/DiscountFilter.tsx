import { Checkbox } from "@/Components/Shared/UI/checkbox"

export default function DiscountFilter() {
    return (
        <div className="mb-6">
            <label className="flex items-center">
                <Checkbox id="discounted" />
                <span className="ml-2">Productos con descuento</span>
            </label>
        </div>
    )
}

