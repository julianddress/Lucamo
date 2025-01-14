import { Card, CardContent, CardHeader, CardTitle } from "@/Components/UI/Card";

interface StatsCardProps {
    title: string;
    value: string;
    percent: number;
    color?: string;
}

export function StatsCard({
    title,
    value,
    percent,
    color = "purple",
}: StatsCardProps) {
    return (
        <Card className="shadow-custom2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center">
                <svg className="h-24 w-24">
                    <circle
                    className="text-muted stroke-current"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    />
                    <circle
                    className={`text-${color}-500 stroke-current`}
                    strokeWidth="5"
                    strokeDasharray={`${percent * 2.83}, 283`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    />
                </svg>
                <span className="absolute text-2xl font-bold">{value}%</span>
                </div>
            </CardContent>
        </Card>
    );
}
