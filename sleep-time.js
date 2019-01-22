
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labeling,
        datasets: [{
            data: [6,1,3,5,6],
            borderColor: ['rgba(54, 162, 235, 1)'],
            label: 'All Time Entry',
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

// ADDING NEW DATA SO THAT WE CAN VIEW IT
var data=allDateTime().Times;
// console.log(data);

var dataSleep=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 !== 0;
});
var dataWakeUp=(allDateTime().Times).filter((value,index,array) => {
    return index % 2 === 0;
});

var labeling=chartTime(dataSortOdd()).endDates;
console.log(labeling);

var sleepData=[];

for (n=0; n<labeling.length; n++){
    sleepData.push(dataSleep[n]-dataWakeUp[n]);
    addData(myChart, labeling[n],sleepData[n]);
}

allDateTime();
