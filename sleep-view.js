
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labeling,
        datasets: [{
            data: dataSleep,
            borderColor: ['rgba(54, 162, 235, 1)'],
            label: 'Sleep Time Entry',
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
// console.log(dataSortOdd());
// console.log(chartTime(dataSortOdd()));
// ADDING NEW DATA SO THAT WE CAN VIEW IT
// var data=allDateTime().Times;
var data=allDateTime().Times;
// var data2=(allDateTime().Times).filter((value,index,array) => {
//     return index % 2 === 0;
// });
var dataSleep=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 !== 0;
});
// console.log(data2);
// console.log(data3);
// console.log(allDateTime().Times);
// var data=chartTime(dataSortOdd()).endTimes;
// console.log(data);
// var labeling=allDateTime().Dates;
var labeling=chartTime(dataSortOdd()).endDates;
// console.log(labeling);
// console.log(labeling.length);
// console.log(data.length);
// var data4=[];
// var data5=[];
for (n=0; n<labeling.length; n++){
    // // console.log(data[n]);
    // if(n%2===0){
    //      data4.push(data[n]);
    // //      console.log(2);
    // }
    // else{
    //     data5.push(data[n]);
    // //     console.log(1);
    // }
    // // console.log(labeling[n]);
    // // console.log(data4);
    addData(myChart, labeling[n],dataSleep[n]);
    // addData(myChart, labeling[n],data2[n]);
    // addData(myChart, labeling[n],data3[n]);
    // addData1(myChart, labeling[n],data[n]);
    // addData(myChart,data4[n],0);
    // addData(myChart,data5[n],1);
}

// // ADDING NEW LINES TO THE GRAPH
// myChart.data.datasets.push({
//   label: 'label3',
//   backgroundColor: '#ff0000',
//   data: data4
// });
// myChart.update();

allDateTime();
