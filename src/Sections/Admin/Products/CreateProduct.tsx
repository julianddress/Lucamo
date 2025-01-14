import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Button } from "@/Components/UI/button"
import { Card, CardContent } from "@/Components/UI/Card"
import { Input } from "@/Components/UI/input"
import { Label } from "@/Components/UI/label"
import { Textarea } from "@/Components/UI/textarea"
import { Switch } from "@/Components/UI/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/UI/select"

export function CreateProductSection() {
    const [images, setImages] = useState<string[]>([])

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
        const newImages = Array.from(files).map(file => URL.createObjectURL(file))
        setImages(prev => [...prev, ...newImages].slice(0, 4))
        }
    }

    return (
        <Card>
            <CardContent className="pt-6">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <Label htmlFor="images">Product Images (Max 4)</Label>
                        <div className="grid grid-cols-2 gap-4">
                            {Array(4).fill(0).map((_, i) => (
                            <div key={i} className="aspect-square relative border rounded-lg overflow-hidden">
                                {images[i] ? (
                                <img 
                                    src={images[i]} 
                                    alt={`Product image ${i + 1}`} 
                                    className="object-cover w-full h-full"
                                />
                                ) : (
                                <div className="w-full h-full flex items-center justify-center bg-muted">
                                    <Plus className="h-6 w-6 text-muted-foreground" />
                                </div>
                                )}
                            </div>
                            ))}
                        </div>
                        <Input 
                            id="images" 
                            type="file" 
                            accept="image/*" 
                            multiple 
                            onChange={handleImageUpload}
                            className="mt-2"
                        />
                        </div>

                        <div className="space-y-4">
                        <div>
                            <Label htmlFor="reference">Reference</Label>
                            <Input id="reference" placeholder="Enter product reference" />
                        </div>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter product name" />
                        </div>
                        <div>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" type="number" min="0" placeholder="Enter quantity" />
                        </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Enter product description" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="price">Price</Label>
                            <Input id="price" type="number" min="0" step="0.01" placeholder="Enter price" />
                        </div>
                        <div>
                            <Label htmlFor="discount">Discount (%)</Label>
                            <Input id="discount" type="number" min="0" max="100" placeholder="Enter discount" />
                        </div>
                        <div>
                            <Label htmlFor="category">Category</Label>
                            <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="nacional">Nacional</SelectItem>
                                <SelectItem value="importado">Importado</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        </div>

                        <div className="flex items-center space-x-2">
                        <Switch id="featured" />
                        <Label htmlFor="featured">Featured Product</Label>
                        </div>

                        <Button type="submit" className="w-full">Create Product</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

