var recorder= document.getElementById("recorder");
var timeDisplay=document.getElementById('time-display');
var timeLogging=new Array;
var dateLogging= new Array();
var log= [];
var dLog=[];

console.log(timeDisplay);
// Generate the time, day and date string
function allTimeLog() {
	var d= new Date();
	var t=d.toString();
	console.log(t);
	return t;
}

// Pick the time string only for display and storage
function timeLog(t){
	var time= t.slice(16,21);
	console.log(time);
	return time;
}

// Pick the time string only for display and storage
function dateLog(t){
	var date=t.slice(4,15);
	console.log(date);
	return date;
}

function timeStore(time){
	// CHECK IF THERE IS LOCALSTORAGE DATA FOR TIME
	// SO THAT YOU AVOID OVERWRITING IT
	if (localStorage.key(1)==='timeLogger'){
		console.log(timeLogger);
		log=JSON.parse(localStorage.getItem('timeLogger'));
		log.push(time);
		timeLogger=JSON.stringify(log);
		localStorage.setItem('timeLogger',timeLogger);
		console.log(log);
		// alert(2);
	} 
	else {
		// alert(1);
		console.log(log);
		console.log(time);
		log.push(time);
		console.log(log);
		var timeLogger=JSON.stringify(log);
		console.log(timeLogger);		
    	localStorage.setItem('timeLogger',timeLogger);
	}
	console.log(log);
	return log;
}

function dateStore(date){
	// CHECK IF THERE IS LOCALSTORAGE DATA FOR DATE
	// SO THAT YOU AVOID OVERWRITING IT
	if (localStorage.key(0)==='dateLogger'){
		console.log(dateLogger);
		dLog=JSON.parse(localStorage.getItem('dateLogger'));
		dLog.push(date);
		dateLogger=JSON.stringify(dLog);
		localStorage.setItem('dateLogger',dateLogger);
		console.log(dLog);
		// alert(2);
	}
	else {
		// alert(1);
		console.log(date);
		dLog.push(date);
		console.log(dLog);
		var dateLogger=JSON.stringify(dLog);
		console.log(dateLogger);	
    	localStorage.setItem('dateLogger',dateLogger);
    	console.log(dateLogger);
	}
	console.log(dLog);
	return dLog;
}


document.querySelector('#test').addEventListener('click',function(){
	timeLog(allTimeLog());
	dateLog(allTimeLog());
	console.log(allTimeLog());
	dateLog(allTimeLog());
	// console.log(log);
	// console.log(timeStore());
	timeStore(timeLog(allTimeLog()));
	dateStore(dateLog(allTimeLog()));
	console.log(log);
	console.log(allTimeLog());
	timeDisplay.innerText=timeLog(allTimeLog());
	
});
document.querySelector("#graph").addEventListener("click",function(){
	dataSortEven(timeStore(timeLog(allTimeLog())));
	dataSortOdd(timeStore(timeLog(allTimeLog())));
	console.log(timeStore(timeLog(allTimeLog())));
	chartTime(dataSortOdd());
});

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
function timeStamps(){
	timeLogging.push(timeLog(allTimeLog()));
	// console.log(timeLogging);
	return timeLogging;
}


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
	console.log(startTimes);
	return startTimes;
}
// When draw graph is called it captures and stores the current data of end time for display on graph

function dataSortOdd(sto) {
	console.log(log);
	// console.log(timeLogging);
	var endTimes= new Array();
	var endDates= new Array();
	// console.log(typeof(endTimes));
	console.log(log.length);
	for (n=0; n<log.length; n++){
		if (n%2!==0){
			endTimes.push(log[n]);
		}
	}
	console.log(endTimes);
	return endTimes;
}

// Generating data for displaying the end of a duration you were timing
function chartTime(endTimes) {
	for (n=0; n<endTimes.length; n++){	
		endTimes[n]=parseInt(endTimes[n]) + parseFloat((endTimes[n].slice(3,6))/60);
		console.log(endTimes);
	}
	return endTimes;
}


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