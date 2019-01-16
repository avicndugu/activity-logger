
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [0, 1, 2, 1, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function addData(chart, label, data){
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    myChart.update();
}

// REMOVING OLD DATA SO THAT WE CAN PUT ALL THE DATA FROM STORAGE
// timeStore(timeLog(allTimeLog()));
// dateStore(dateLog(allTimeLog()));

for (n=myChart.data.labels.length; n>=0; n--){
    myChart.data.labels.pop();
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    myChart.update();
}
// console.log(dataSortOdd());
// console.log(chartTime(dataSortOdd()));
// ADDING NEW DATA SO THAT WE CAN VIEW IT
var data=chartTime(dataSortOdd()).endTimes;
// console.log(data);
var labeling=chartTime(dataSortOdd()).endDates;
// console.log(labeling);
// console.log(labeling.length);
// console.log(data.length);
for (n=0; n<labeling.length; n++){
    // console.log(data[n]);
    // console.log(labeling[n]);
    addData(myChart, labeling[n],data[n]);
}
