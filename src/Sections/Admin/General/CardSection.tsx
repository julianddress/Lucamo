import { StatsCard } from "@/Components/Admin/MainStats/MainStats";
import { useNavigate } from "react-router-dom";

const CardSection:  React.FC = () => {

    const navigate = useNavigate();

    return (

        <div className="grid grid-cols-3 gap-6">
            <div className="cursor-pointer hover:scale-[105%] hover:duration-500" onClick={() => navigate("/Admin/Estadisticas")}>
                <StatsCard title="ENERO" value="90" percent={90} color="orange" />
            </div>
            <div className="cursor-pointer hover:scale-[105%] hover:duration-500" onClick={() => navigate("/Admin/Estadisticas")}>
                <StatsCard title="DICIEMBRE" value="50" percent={50} color="blue" />
            </div>
            <div className="cursor-pointer hover:scale-[105%] hover:duration-500" onClick={() => navigate("/Admin/Estadisticas")}>
                <StatsCard title="NOVIEMBRE" value="33" percent={33} color="green" />
            </div>
        </div>

    );
};

export { CardSection };
