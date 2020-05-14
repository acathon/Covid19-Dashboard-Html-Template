new Chart(document.getElementById("contamination"), {
    type: 'doughnut',
    data: {
        labels: ["Imported", "Indigenous"],
        datasets: [{
            label: "Contamination Origins",
            backgroundColor: ["rgba(220, 53, 69, 0.2)", "rgba(220, 53, 69, 1)"],
            borderColor: ["#fff", "#fff"],
            data: ["41.48", "58.52"]
        }]
    },
    options: {
        cutoutPercentage: 80,
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