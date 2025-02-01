import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const options = {
    responsive: true,
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        beginAtZero: true,
        },
    },
}

const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
        {
        data: [65, 45, 75, 90, 60, 75],
        backgroundColor: '#10b981',
        borderRadius: 8,
        },
    ],
}

export function ActivityChart() {
    return (
        <Bar options={options} data={data} height={200} />
    )
}

