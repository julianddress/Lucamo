import { Card, CardContent, CardHeader, CardTitle } from "@/Components/Shared/UI/Card"
import { ActivityChart } from "@/Components/Admin/ActivityChart/Activitychart"
import { SalesChart } from "@/Components/Admin/SalesChart/Saleschart"

const GraphSection: React.FC = () => {
    return (

        <div className="grid grid-cols-2 gap-6 ">
            <Card className="col-span-1 shadow-custom2">
                <CardHeader>
                    <CardTitle>Inventario</CardTitle>
                </CardHeader>
                <CardContent>
                    <ActivityChart />
                </CardContent>
            </Card>
            <Card className="col-span-1 shadow-custom2">
                <CardHeader>
                    <CardTitle>Ventas por Categoría</CardTitle>
                </CardHeader>
                <CardContent>
                    <SalesChart />
                </CardContent>
            </Card>
        </div>

    );
};

export { GraphSection };
