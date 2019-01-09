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
	var endTimes= new Array();
	// console.log(timeLogging.length);
	// console.log(timeLogging);
	for (n=0; n<timeLogging.length; n++){
		if (n%2!==0){
			endTimes.push(timeLogging[n]);
		}
	}
	console.log(endTimes);
	return endTimes;
}

// console.log(logger.dateStamp());

document.querySelector("#recorder").addEventListener("click",function(){
	buttonText();
	allTimeLog();
	// timeLogger();
	timeDisplay.innerText=timeLog(allTimeLog());
	timeStamps();
	console.log(logger.timeStamp);

	// console.log(logger.dateStamp());
});
	
// recorder
document.querySelector("#graph").addEventListener("click",function(){
	dataSortEven();
	dataSortOdd();
	console.log(logger.timeStamp);
});
