
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labeling,
        datasets: [{
            data: dataWakeUp,
            borderColor: ['rgba(54, 162, 235, 1)'],
            label: 'Time Entry',
            borderWidth: 3,
            fill:false
        },
        ]
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
for (n=myChart.data.labels.length; n>=0; n--){
    myChart.data.labels.pop();
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    myChart.update();
}

// ADDING NEW DATA SO THAT WE CAN VIEW IT
var data=allDateTime().Times;
var dataWakeUp=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 === 0;
});

var labeling=chartTime(dataSortOdd()).endDates;
for (n=0; n<labeling.length; n++){
    addData(myChart, labeling[n],dataWakeUp[n]);
}

// // ADDING NEW LINES TO THE GRAPH
// myChart.data.datasets.push({
//   label: 'label3',
//   backgroundColor: '#ff0000',
//   data: data4
// });
// myChart.update();

allDateTime();
