var recorder= document.getElementById("recorder");
var timeDisplay=document.getElementById('time-display');
var timeLogging=new Array;
var dateLogging= new Array();
var log= [];
var dLog=[];


if (localStorage.key(0)==='dateLogger'){
	log=JSON.parse(localStorage.getItem('timeLogger'));
	timeLogger=JSON.stringify(log);
	localStorage.setItem('timeLogger',timeLogger);
	// alert(1);
} else {
	// alert(2);
}

if (localStorage.key(0)==='dateLogger'){
		dLog=JSON.parse(localStorage.getItem('dateLogger'));
		dateLogger=JSON.stringify(dLog);
		localStorage.setItem('dateLogger',dateLogger);
}
// Generate the time, day and date string
function allTimeLog() {
	var d= new Date();
	var t=d.toString();
	// console.log(t);
	return t;
}

// Pick the time string only for display and storage
function timeLog(t){
	var time= t.slice(16,21);
	// console.log(time);
	return time;
}

// Pick the time string only for display and storage
function dateLog(t){
	var date=t.slice(4,15);
	// console.log(date);
	return date;
}

function timeStore(time){
	// CHECK IF THERE IS LOCALSTORAGE DATA FOR TIME
	// SO THAT YOU AVOID OVERWRITING IT
	if (localStorage.key(1)==='timeLogger'){
		log=JSON.parse(localStorage.getItem('timeLogger'));
		log.push(time);
		timeLogger=JSON.stringify(log);
		localStorage.setItem('timeLogger',timeLogger);
		// console.log(log);
		// console.log(timeLogger);
		// alert(2);
	} 
	else {
		// alert(1);
		// console.log(log);
		// console.log(time);
		log.push(time);
		// console.log(log);
		var timeLogger=JSON.stringify(log);
		// console.log(timeLogger);		
    	localStorage.setItem('timeLogger',timeLogger);
	}
	// console.log(log);
	return log;
}

function dateStore(date){
	// CHECK IF THERE IS LOCALSTORAGE DATA FOR DATE
	// SO THAT YOU AVOID OVERWRITING IT
	if (localStorage.key(0)==='dateLogger'){
		dLog=JSON.parse(localStorage.getItem('dateLogger'));
		dLog.push(date);
		dateLogger=JSON.stringify(dLog);
		localStorage.setItem('dateLogger',dateLogger);
		// console.log(dLog);
		// console.log(dateLogger);
		// alert(2);
	}
	else {
		// alert(1);
		// console.log(date);
		dLog.push(date);
		// console.log(dLog);
		var dateLogger=JSON.stringify(dLog);
		// console.log(dateLogger);	
    	localStorage.setItem('dateLogger',dateLogger);
    	// console.log(dateLogger);
	}
	// console.log(dLog);
	return dLog;
}


document.querySelector('#test').addEventListener('click',function(){
	// console.log(allTimeLog());
	timeStore(timeLog(allTimeLog()));
	dateStore(dateLog(allTimeLog()));
	timeDisplay.innerText=timeLog((allTimeLog()));
	timeDisplay.style.textAlign="center";
	// timeDisplay.style.a\lign="center";
});
// document.querySelector('#chart-view').addEventListener('click', function(){
//     window.location.href = "chart-view.html";
// });
// document.querySelector("#graph").addEventListener("click",function(){
// 	console.log(dataSortOdd(log,dLog));
// 	console.log(log);
// });

// old code to be rewritten


// DISPLAYED BUTTON TEXT FOR RECORDING DATA
function buttonText(){
	if (recorder.innerText=="Start") {
			recorder.innerText="Stop";
		}
	else{
		recorder.innerText="Start";
	}
}
// function timeStamps(){
// 	timeLogging.push(timeLog(allTimeLog()));
// 	// console.log(timeLogging);
// 	return timeLogging;
// }


// When draw graph is called it captures and store the current data of start time
function dataSortEven(sto) {
	var startTimes= new Array();
	var startDates= new Array();
	// console.log(timeLogging.length);
	// console.log(timeLogging);
	for (n=0; n<log.length; n++){
		if (n%2===0){
			startTimes.push(log[n]);
			startDates.push(dLog[n]);
		}
	}
	var start=[startTimes,startDates];
	// console.log(start);
	return start;
}
// When draw graph is called it captures and stores the current data of end time for display on graph

function dataSortOdd(stoT,stoD) {
	// console.log(dLog);
	// console.log(log);
	// console.log(timeLogging);
	var endTimes= new Array();
	var endDates= new Array();
	// console.log(typeof(endTimes));
	// console.log(log.length);
	for (n=0; n<log.length; n++){
		if (n%2!==0){
			endTimes.push(log[n]);
			endDates.push(dLog[n]);
		}
	}
	var end={
		endTimes,endDates}
		;
	// console.log(end);
	// console.log(end.endDates);
	return end;
}

// Generating data for displaying the end of a duration you were timing
function chartTime(end) {
	// console.log(end);
	// console.log(end.endTimes.length);
	for (n=0; n<end.endTimes.length; n++){	
		// end.endTimes[n]=parseInt(end.endTimes[n]) + parseFloat((end.endTimes[n].slice(3,6))/60);
		// end.endDates[n]=end.endDates[n];
		// console.log(end.endTimes);
	}
	// console.log(end.endTimes);
	// console.log(end);
	return end;
}

function allTime(){
	// var Times=[];
	for(m=0; m<log.length; m++){
		// Times.push(parseInt(log[m])+ parseFloat((log[m].slice(3,6))/60));
		// console.log(Times);
	}
	// return Times;
}
function allDateTime() {
	var Dates=[];	
	var Times=[];
	for (n=0; n<log.length; n++){
		Times.push(parseInt(log[n])+ parseFloat((log[n].slice(3,6))/60));
		Dates.push(dLog[n]);
	}
	// console.log(Times);
	// console.log(Dates);
	return {Dates,Times};
}
// allTime();
allDateTime();



// 	var data=chartTime(dataSortOdd());

// document.querySelector("#adding").addEventListener("click",function(){
// 	var data=chartTime(dataSortOdd());
// });
// console.log(logger.dateStamp());



// DATA TO BE STORED IN THE LOCAL STORAGE FOR REMEMBRANCE
// var logger = {
// 	timeStamp: timeLogging,
// 	// function(){
// 	// timeLogging.push(timeLog(allTimeLog()));
// 	// // console.log(timeLogging);
// 	// return timeLogging;
// 	// }
// 	dateStamp:function(){
// 	dateLogging.push(dateLog(allTimeLog()));
// 	console.log(dateLogging);
// 	return dateLogging;
// 	}
// }
// // console.log(timeStamps());


// document.querySelector("#recorder").addEventListener("click",function(){
// 	buttonText();
// 	allTimeLog();
// 	// timeLogger();
// 	timeDisplay.innerText=timeLog(allTimeLog());
// 	timeStamps();
// 	dataSortEven(timeStore(timeLog(allTimeLog())));
// 	dataSortOdd(timeStore(timeLog(allTimeLog())));
// 	console.log(timeStore(timeLog(allTimeLog())));
// 	chartTime(dataSortOdd());
// 	// console.log(chartTime(dataSortOdd()));
// 	// console.log(logger.timeStamp);
//     console.log(chartTime(dataSortOdd()));
//     // console.log(logger.timeStamp);
//     console.log(timeStamps());

// // CONVERTING TO string

// // console.log(Logger);

// 	// console.log(logger.dateStamp());
// });
	
// recorder
// document.querySelector("#graph").addEventListener("click",function(){
// 	// dataSortEven();
// 	// dataSortOdd();
// 	// chartTime(dataSortOdd());
// 	console.log(logger.timeStamp);
// });

// console.log(myChart.data.labels.length);




// // LOCAL STORAGE HAPPENING HERE
// if(window.localStorage) {
//     console.log('ls exists');
//  //    if(!window.timeLogging) {
// 	// 	var timeLogging =new Array();
// 	// 	console.log(1);
// 	// }
// 	// else{

// 	// }
//     // var localLogger=JSON.stringify(timeLogging);
//     // localStorage.setItem('logger',localLogger);
//     // console.log(localStorage.getItem('logger'));
// } else {
//     console.log('ls does not exist');
// }