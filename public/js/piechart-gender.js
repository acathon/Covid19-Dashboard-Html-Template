new Chart(document.getElementById("gender"), {
    type: 'pie',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            backgroundColor: ["#D2EFFB", "#F7ABD5"],
            data: ["50", "50"]
        }]
    },
    options: {
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        legend: {
            display: true,
            position: 'right',
            fullWidth: false,
            labels: {
                usePointStyle: true
            }
        }
    },
    centerText: {
        display: true,
        text: "280"
    }
});