var recorder= document.getElementById("recorder");
var timeDisplay=document.getElementById('time-display');
var timeLogging=new Array();
var dateLogging= new Array();

console.log(timeDisplay);
// Generate the time, day and date string
function allTimeLog() {
	var d= new Date();
	var t=d.toString();
	// console.log(typeof(t));
	return t;
}
// Pick the time string only for display and storage
function timeLog(t){
	var time= t.slice(16,21);
	// console.log(time);
	return time;
}
// function timeLogger(){
// 	timeLogging.push(timeLog(allTimeLog()));
// 	console.log(timeLogging);
// 	return timeLogging;
// }

// Pick the time string only for display and storage
function dateLog(t){
	var date=t.slice(4,15);
	console.log(date);
	return date;
}
// var dateLogging=dateLog(allTimeLog());


function buttonText(){
	if (recorder.innerText=="Start") {
			recorder.innerText="Stop";
		}
	else{
		recorder.innerText="Start";
	}
}
function timeStamps(){
	timeLogging.push(timeLog(allTimeLog()));
	// console.log(timeLogging);
	return timeLogging;
}
var logger = {
	timeStamp: timeLogging,
	// function(){
	// timeLogging.push(timeLog(allTimeLog()));
	// // console.log(timeLogging);
	// return timeLogging;
	// }
	dateStamp:function(){
	dateLogging.push(dateLog(allTimeLog()));
	console.log(dateLogging);
	return dateLogging;
	}
}
// When draw graph is called it captures and store the current data of start time
function dataSortEven() {
	var startTimes= new Array();
	// console.log(timeLogging.length);
	// console.log(timeLogging);
	for (n=0; n<timeLogging.length; n++){
		if (n%2===0){
			startTimes.push(timeLogging[n]);
		}
	}
	console.log(startTimes);
	return startTimes;
}
// When draw graph is called it captures and stores the current data of end time for display on graph

function dataSortOdd() {
	console.log(timeLogging);
	// console.log(timeLogging);
	var endTimes= new Array();
	// console.log(typeof(endTimes));
	console.log(timeLogging.length);
	for (n=0; n<timeLogging.length; n++){
		if (n%2!==0){
			endTimes.push(timeLogging[n]);
		}
	}
	console.log(endTimes);
	return endTimes;
}
// var hours=new Array();
// var H;
// var M=new Array;
function chartTime(endTimes) {
	for (n=0; n<endTimes.length; n++){	
		endTimes[n]=parseInt(endTimes[n]) + parseFloat((endTimes[n].slice(3,6))/60);
		console.log(endTimes);
	}
	return endTimes;
	// for (i=0; i<endTimes.length; i++){
	// 	console.log(endTimes.length);
	// 	// console.log(endTimes[2]);
	// 	M.push(endTimes[i]);
	// 	console.log(M);
	// 	// H=parseInt(endTimes[i].slice(0,2))+ (parseFloat(endTimes[i].slice(3,6))/60);
		// M=parseInt(endTimes[i].slice(3,6))
		// console.log(M);
		// hours.push(H);
		// console.log(hours);
		// return hours;	
	// }
}


// function chartTime(endTimes) {
// 	for (i=0; i<endTimes.length; i++){
// 		// console.log(endTimes.length);
// 		H=parseInt(endTimes[i].slice(0,2))+ (parseFloat(endTimes[i].slice(3,6))/60);
// 		console.log(H);
// 		hours.push(H);
// 		// console.log(hours);
// 		return hours;
// 	}
// }

// 	var data=chartTime(dataSortOdd());

// document.querySelector("#adding").addEventListener("click",function(){
// 	var data=chartTime(dataSortOdd());
// });
// console.log(logger.dateStamp());

document.querySelector("#recorder").addEventListener("click",function(){
	buttonText();
	allTimeLog();
	// timeLogger();
	timeDisplay.innerText=timeLog(allTimeLog());
	timeStamps();
	dataSortEven();
	dataSortOdd();
	chartTime(dataSortOdd());
	// console.log(chartTime(dataSortOdd()));
	console.log(logger.timeStamp);
    console.log(chartTime(dataSortOdd()));


	// console.log(logger.dateStamp());
});
	
// recorder
document.querySelector("#graph").addEventListener("click",function(){
	// dataSortEven();
	// dataSortOdd();
	// chartTime(dataSortOdd());
	console.log(logger.timeStamp);
});

// console.log(myChart.data.labels.length);