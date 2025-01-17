import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Shared/UI/table"
import { Button } from "@/Components/Shared/UI/button"
import { Card, CardContent } from "@/Components/Shared/UI/Card"
import { Switch } from "@/Components/Shared/UI/switch"

export function FeaturedProductsSection() {
    return (
        <Card>
            <CardContent className="pt-6">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Reference</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Discount</TableHead>
                            <TableHead>Featured Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>001</TableCell>
                            <TableCell>REF123</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>20%</TableCell>
                            <TableCell>
                                <Switch defaultChecked />
                            </TableCell>
                            <TableCell>
                                <Button size="sm">Update</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

