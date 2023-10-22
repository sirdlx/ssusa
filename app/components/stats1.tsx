import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
import { useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,

);

const options = {
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

const labels = ['Sales', 'Ticket Size'];

const data = {
    labels,
    datasets: [
        {
            label: 'With Financing',
            data: [30, 50],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }, {
            label: 'Full Price',
            data: [5, 10],
            backgroundColor: '#FFF',
        }
    ],
};

export function Stats1() {
    return <Bar options={options} data={data} />;
}



const options2 = {
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

const labels2 = ['Affirm', 'Klarma', 'No Financing'];

const data2 = {
    labels: labels2,
    datasets: [

        {
            label: 'Total Sales Gain %',
            data: [85, 45, 10],
            backgroundColor: () => {

                return 'rgba(53, 162, 235, 0.5)';
            },

        },





    ],
};

export function Stats2() {
    return <Bar options={options2} data={data2} />;
}



export const optionsLine = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'left' as const,
        },
        title: {
            display: true,
            text: 'Gross Merchandice Value (%)',
        },
    },
};

const labelsLine = ['Without', 'February'];

export const dataLine = {
    labels: labelsLine,
    datasets: [
        {
            label: 'Dataset 1',
            data: [0, 93],
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },



    ],
};

export function LineChart() {
    return <Line options={optionsLine} data={dataLine} />;
}


const optionsConversion = {
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

const labelsConversion = [''];

const dataConversion = {
    labels: labelsConversion,
    datasets: [
        {
            label: 'With Financing',
            data: [6, 10],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }, {
            label: 'Full Price',
            data: [4, 10],
            backgroundColor: '#FFF',
        }
    ],
};

export function StatsConversion() {

    return <Bar options={optionsConversion} data={dataConversion} />;
}