import { getLast7Days } from '../utils/date.utils'

const theme = localStorage.getItem('theme') || 'dark'
export const barChartDataDailyTraffic = [
    {
        name: 'Acesso Diário',
        data: [1851, 1923, 1974, 2035, 2096, 2167, 2228].sort(() => 0.5 - Math.random()),
    },
]

export const barChartOptionsDailyTraffic = {
    chart: {
        background: 'transparent',
        toolbar: {
            show: false,
        },
    },
    theme: {
        mode: theme,
    },
    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        theme: 'dark',
    },
    xaxis: {
        categories: getLast7Days(),
        show: false,
        width: '5px',
        labels: {
            show: true,
            style: {
                colors: '#A3AED0',
                fontSize: '14px',
                fontWeight: '500',
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: true,
        labels: {
            style: {
                color: 'red',
            },
        },
    },
    grid: {
        show: false,
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
                [
                    {
                        offset: 0,
                        color: '#ea580c',
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: '#fb923c',
                        opacity: 1,
                    },
                ],
            ],
        },
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            colors: ['#ededed'],
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: '50%',
            dataLabels: {
                position: 'top',
            },
        },
    },
}

export const pieChartOptions = {
    labels: ['Your files', 'System', 'Empty'],
    colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
    chart: {
        background: 'transparent',
        width: '50px',
    },
    states: {
        hover: {
            filter: {
                type: 'none',
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                labels: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
    },
}

export const pieChartData = [63, 25, 12]

export const barChartDataWeeklyRevenue = [
    {
        name: 'PRODUCT A',
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: '#6AD2Fa',
    },
    {
        name: 'PRODUCT B',
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: '#4318FF',
    },
    {
        name: 'PRODUCT C',
        data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
        color: '#EFF4FB',
    },
]

export const barChartOptionsWeeklyRevenue = {
    chart: {
        background: 'transparent',
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    // colors:['#ff3322','#faf']
    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
        theme: 'dark',
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
    },
    xaxis: {
        categories: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
        show: false,
        labels: {
            show: true,
            style: {
                colors: '#A3AED0',
                fontSize: '14px',
                fontWeight: '500',
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        color: 'black',
        labels: {
            show: false,
            style: {
                colors: '#A3AED0',
                fontSize: '14px',
                fontWeight: '500',
            },
        },
    },

    grid: {
        borderColor: 'rgba(163, 174, 208, 0.3)',
        show: true,
        yaxis: {
            lines: {
                show: false,
                opacity: 0.5,
            },
        },
        row: {
            opacity: 0.5,
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    fill: {
        type: 'solid',
        colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    },
    legend: {
        show: false,
    },
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '20px',
        },
    },
}

export const lineChartDataTotalSpent = [
    {
        name: 'Interações',
        data: [50, 64, 48, 66, 49, 68, 59],
        color: '#ea580c',
    },
    {
        name: 'Leads',
        data: [11, 20, 12, 13, 11, 21, 19],
        color: '#fed7aa',
    },
]

export const lineChartOptionsTotalSpent = {
    legend: {
        show: false,
    },

    theme: {
        mode: theme,
    },
    chart: {
        background: 'transparent',
        type: 'line',

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },

    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        theme: 'dark',
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: '#A3AED0',
                fontSize: '12px',
                fontWeight: '500',
            },
        },
        type: 'text',
        range: undefined,
        categories: getLast7Days(),
    },

    yaxis: {
        show: true,
    },
}

export const lineChartDataHourlyLeads = [
    {
        name: 'Interações',
        data: [50, 64, 48, 66, 49, 68, 59, 50, 64, 48, 66, 49, 50, 64, 48, 66, 49, 68, 59, 50, 64, 48, 66, 49],
        color: '#ea580c',
    },
    {
        name: 'Leads',
        data: [11, 20, 12, 13, 11, 21, 19, 11, 20, 12, 13, 11, 11, 20, 12, 13, 11, 21, 19, 11, 20, 12, 13, 11],
        color: '#fed7aa',
    },
]

export const lineChartOptionsHourlyLeads = {
    legend: {
        show: false,
    },

    theme: {
        mode: theme,
    },
    chart: {
        background: 'transparent',
        type: 'line',

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },

    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        theme: 'dark',
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: '#A3AED0',
                fontSize: '12px',
                fontWeight: '500',
            },
        },
        type: 'text',
        range: undefined,
        categories: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
        ],
    },

    yaxis: {
        show: true,
    },
}

export const lineChartDataFlow = [
    {
        name: 'Leads',
        data: [1500, 1200, 1000, 950, 800, 650, 629, 322, 84, 83, 83],
        color: '#ea580c',
    },
]

export const lineChartOptionsFlow = {
    legend: {
        show: false,
    },
    theme: {
        mode: theme,
    },
    chart: {
        background: 'transparent',
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
            backgroundColor: '#000000',
        },
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        theme: 'dark',
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: '#A3AED0',
                fontSize: '12px',
                fontWeight: '500',
            },
        },
        type: 'text',
        range: undefined,
        categories: [
            'Início',
            'Nome',
            'Email',
            'Telefone',
            'Cliente',
            'Área',
            'Mensagem',
            'Acessos',
            'Investimento',
            'Segmento',
            'Lead completo',
        ],
    },
    yaxis: {
        show: true,
        min: 0,
        max: lineChartDataFlow[0].data[0] * 1.2,
    },
    annotations: {
        xaxis: [
            {
                x: 'Nome',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[0] - lineChartDataFlow[0].data[1]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Email',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[1] - lineChartDataFlow[0].data[2]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Telefone',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[2] - lineChartDataFlow[0].data[3]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Cliente',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[3] - lineChartDataFlow[0].data[4]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Área',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[4] - lineChartDataFlow[0].data[5]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Mensagem',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[5] - lineChartDataFlow[0].data[6]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Acessos',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[6] - lineChartDataFlow[0].data[7]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Investimento',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[7] - lineChartDataFlow[0].data[8]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
            {
                x: 'Segmento',
                borderColor: '#FEB019',
                label: {
                    text: `${lineChartDataFlow[0].data[8] - lineChartDataFlow[0].data[9]} Abandonos`,
                    style: {
                        background: theme === 'dark' ? '#1f2937' : '#f3f4f6',
                        color: theme === 'dark' ? '#f3f4f6' : '#1f2937',
                        fontSize: '12px',
                        padding: {
                            left: 10,
                            right: 10,
                            top: 5,
                            bottom: 5,
                        },
                    },
                },
            },
        ],
    },
}
