new Chart(document.getElementById('confirmedChart'), {
    type: 'line',
    data: {
        labels: ['20 Mars', '21 Mars', '22 Mars', '23 Mars',
            '24 Mars', '25 Mars', '26 Mars', '27 Mars',
            '28 Mars', '29 Mars', '30 Mars',
            '31 Mars', '1 April', '2 April', '3 April',
            '4 April'
        ],
        datasets: [{
            data: [54, 60, 75, 89, 114, 173, 197,
                227, 278, 312, 312, 394, 423,
                455, 495, 553
            ],
            label: "Confirmed",
            borderColor: '#DC3545',
            backgroundColor: 'rgba(220, 53, 69, 0.2)',
            fill: true
        }]
    },
    options: {
        maintainAspectRatio: false,
        resonsive: true,
        lineTension: 0,
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