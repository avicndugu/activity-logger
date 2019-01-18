
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            data: [0, 1, 2, 1, 2, 3],
            borderColor: ['rgba(54, 162, 235, 1)'],
            label: '# of Votes',
            borderWidth: 3,
            fill:false
        },
        {
            data: [10, 1, 2, 1, 2, 3],
            borderColor: ['rgba(154, 162, 235, 1)'],
            label: '# of Votes',
            borderWidth: 3,
            fill:false
        }
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
// console.log(dataSortOdd());
// console.log(chartTime(dataSortOdd()));
// ADDING NEW DATA SO THAT WE CAN VIEW IT
// var data=allDateTime().Times;
var data=allDateTime().Times;
var data2=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 === 0;
});
var data3=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 !== 0;
});
console.log(data2);
console.log(data3);
console.log(allDateTime().Times);
// var data=chartTime(dataSortOdd()).endTimes;
console.log(data);
var labeling=allDateTime().Dates;
// var labeling=chartTime(dataSortOdd()).endDates;
// console.log(labeling);
// console.log(labeling.length);
// console.log(data.length);
for (n=0; n<labeling.length; n++){
    // console.log(data[n]);
    // console.log(labeling[n]);
    addData(myChart, labeling[n],data[n]);
    // addData(myChart, labeling[n],data2[n]);
    // addData(myChart, labeling[n],data3[n]);
}

allDateTime();

myChart.data.datasets[0].data=data2;
myChart.data.datasets[1].data=data3;
console.log(myChart.data.datasets[1].data);
console.log(myChart.data.datasets[0].data);
        // document.getElementById('addData').addEventListener('click', function() {
        //     if (barChartData.datasets.length > 0) {
        //         var month = MONTHS[barChartData.labels.length % MONTHS.length];
        //         barChartData.labels.push(month);

        //         for (var index = 0; index < barChartData.datasets.length; ++index) {
        //             // window.myBar.addData(randomScalingFactor(), index);
        //             barChartData.datasets[index].data.push(randomScalingFactor());
        //         }

        //         window.myBar.update();
        //     }
        // });