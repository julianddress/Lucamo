import { StatsCard } from "@/Components/Admin/MainStats/MainStats";

const CardSection:  React.FC = () => {
    return (

        <div className="grid grid-cols-3 gap-6">
        <StatsCard title="ENERO" value="90" percent={90} color="orange" />
        <StatsCard title="DICIEMBRE" value="50" percent={50} color="blue" />
        <StatsCard title="NOVIEMBRE" value="33" percent={33} color="green" />
        </div>

    );
};

export { CardSection };
