new Chart(document.getElementById('recoveredChart'), {
    type: 'line',
    data: {
        labels: ['20 Mars', '21 Mars', '22 Mars', '23 Mars',
            '24 Mars', '25 Mars', '26 Mars', '27 Mars',
            '28 Mars', '29 Mars', '30 Mars',
            '31 Mars', '1 April', '2 April', '3 April',
            '4 April', '8 April', '9 April'
        ],
        datasets: [{
            data: [0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3,
                3, 5, 5, 5, 5, 22, 25
            ],
            label: "Recovery",
            borderColor: '#28A745',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
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
                    display: false,
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