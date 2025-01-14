import { Pencil, Trash2, Star } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/UI/table"
import { Button } from '@/Components/UI/button'
import { Card, CardContent } from '@/Components/UI/Card'

export function ProductListSection() {
    return (
        <Card>
            <CardContent className="pt-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Reference</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Inventory</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>001</TableCell>
                            <TableCell>REF123</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>50</TableCell>
                            <TableCell>$99.99</TableCell>
                            <TableCell>
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="ghost">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

