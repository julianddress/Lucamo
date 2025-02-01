"use client"

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
    labels: ['Exploradoras', 'Barras', 'Bombillos', 'Licuadoras', 'Industrial', 'Farolas'],
    datasets: [
        {
        data: [4500, 3800, 2900, 3200, 2100, 3600],
        backgroundColor: [
            '#c026d3',
            '#f97316',
            '#06b6d4',
            '#8b5cf6',
            '#ef4444',
            '#84cc16',
        ],
        borderRadius: 8,
        },
    ],
}

export function SalesChart() {
    return (
        <Bar options={options} data={data} height={200} />
    )
}

