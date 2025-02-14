import { Slider } from "@/Components/Shared/UI/slider"

export default function PriceFilter() {
    return (
        <div className="mb-6">
            <h3 className="font-medium mb-2">Rango de precio</h3>
            <Slider defaultValue={[0, 100]} max={100} step={1} />
            <div className="flex justify-between mt-2">
                <span>$0</span>
                <span>$1000</span>
            </div>
        </div>
    )
}

