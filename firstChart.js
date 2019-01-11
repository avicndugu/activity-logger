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

// console.log(myChart.data.labels);
function addData(chart, label, data){
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    myChart.update();
}
// var data=chartTime(dataSortOdd());
document.querySelector('#adding').addEventListener('click', function(){
    var data=chartTime(dataSortOdd());
    for (n=0; n<data.length; n++){
        console.log(data[n]);
        addData(myChart, 'red',data[n]);
    }

});


console.log(myChart.data.labels.length);
document.querySelector('#update').addEventListener('click',function (chart) {
    for (n=myChart.data.labels.length; n>=0; n--){
        // console.log(n);
        myChart.data.labels.pop();
        myChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    myChart.update();
    }
});

// collecion of hours

// function allTimeLog() {
//     var d= new Date();
//     function timeHours() {
//         var h= d.getHours();
//         console.log(h);
//         return h;
//     }    
//     timeHours();
//     function timeMinutes() {
//         var m=d.getMinutes();
//         console.log(m);
//         return m;
//     }
//     timeMinutes();
// }
// allTimeLog();

