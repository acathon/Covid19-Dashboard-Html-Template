new Chart(document.getElementById("regionsChart"), {
    type: 'bar',
    data: {
        labels: ["Tunis", "Ariana", "Mednine", "Ben Arous", "Sousse", "Kebili", "Sfax", "Monastir",
            "Tataouine", "Manouba", "Bizerte", "Nabeul", "Mahdia", "Gafsa", "Gabes", "El Kef",
            "Sidi Bouzid", "Kairouan", "Zaghouan", "Kasserine", "Touzeur", "Beja"
        ],
        datasets: [{
                label: "Deaths",
                data: [2, 3, 2, 1, 4, 0, 4, 0, 1, 2, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                backgroundColor: "#00007c"
            },
            {
                label: 'Confirmed',
                data: [
                    147, 77, 62, 63, 51, 39, 32, 30, 29, 18,
                    15, 12, 10, 10, 7, 5, 5, 4, 3, 2, 1, 2
                ],
                backgroundColor: '#d6b7ff'
            }
        ]
    },
    options: {
        responsive: true,
        layout: {
            padding: {
                left: 00,
                right: 0,
                top: 10,
                bottom: 0
            }
        },
        legend: {
            position: 'right',
            align: 'end',
            display: true,
            labels: {
                usePointStyle: true
            }
        },
        "hover": {
            "animationDuration": 0
        },
        "animation": {
            "duration": 1,
            "onComplete": function () {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;

                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart
                    .defaults.global.defaultFontStyle, Chart.defaults.global
                    .defaultFontFamily);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';

                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function (bar, index) {
                        var data = dataset.data[index];
                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    });
                });
            }
        },
        scales: {
            xAxes: [{
                display: true,
                stacked: true,
                gridLines: {
                    color: '#fff'
                }
            }],
            yAxes: [{
                display: false,
                stacked: true,
                ticks: {
                    beginAtZero: false,
                    mirror: true
                },
                gridLines: {
                    color: '#d2effb'
                }
            }]
        }
    }
});