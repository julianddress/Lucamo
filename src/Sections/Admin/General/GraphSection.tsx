import { Card, CardContent, CardHeader, CardTitle } from "@/Components/Shared/UI/Card"
import { ActivityChart } from "@/Components/Admin/ActivityChart/Activitychart"
import { SalesChart } from "@/Components/Admin/SalesChart/Saleschart"
import { useNavigate } from "react-router-dom";

const GraphSection: React.FC = () => {

    const navigate = useNavigate();
    return (

        <div className="grid grid-cols-2 gap-6 ">
            <Card className="col-span-1 shadow-custom2 cursor-pointer hover:scale-[104%] hover:duration-500" onClick={() => navigate("/Admin/Usuarios")}>
                <CardHeader>
                    <CardTitle>Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                    <ActivityChart />
                </CardContent>
            </Card>
            <Card className="col-span-1 shadow-custom2 cursor-pointer hover:scale-[104%] hover:duration-500" onClick={() => navigate("/Admin/Ventas")}>
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
