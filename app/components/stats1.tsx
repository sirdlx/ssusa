import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        // legend: {
        //     position: 'top' as const,
        // },
        // title: {
        //     display: true,
        //     text: 'Chart.js Bar Chart',
        // },
    },
};

const labels = ['January', 'February'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Before',
            data: labels.map(() => 100),
            backgroundColor: '#FFF',
        },
        {
            label: 'Dataset 2',
            data: [20, 40],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }


    ],
};

export function Stats1() {
    return <Bar options={options} data={data} />;
}

