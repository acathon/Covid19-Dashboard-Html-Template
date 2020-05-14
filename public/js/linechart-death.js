new Chart(document.getElementById('deathsChart'), {
    type: 'line',
    data: {
        labels: ['20 Mars', '21 Mars', '22 Mars', '23 Mars',
            '24 Mars', '25 Mars', '26 Mars', '27 Mars',
            '28 Mars', '29 Mars', '30 Mars',
            '31 Mars', '1 April', '2 April', '3 April',
            '4 April', '7 April', '9 April'
        ],
        datasets: [{
            data: [1, 1, 3, 3, 4, 5, 6, 6, 8, 8, 8,
                10, 12, 14, 18, 19, 22, 25
            ],
            label: "Dead",
            borderColor: '#6C757D',
            backgroundColor: 'rgba(108, 117, 125, 0.2)',
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        resonsive: true,
        lineTension: 0.3,
        legend: {
            display: false
        },
        title: {
            display: false
        },
        elements: {
            point: {
                radius: 4
            },
            line: {
                tension: 0
            }
        },
        layout: {
            padding: {
                top: 5
            }
        },
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    display: false
                },
                gridLines: {
                    drawOnChartArea: true,
                    color: 'white',
                    borderDash: [2, 2],
                    drawTicks: false,
                    z: 999
                }
            }],
            yAxes: [{
                display: false,
                girdLines: {
                    drawOnChartArea: false
                }
            }]
        },
    },
    plugins: {
        filler: {
            propagate: true
        }
    }
});