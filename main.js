var recorder= document.getElementById("recorder");
var timeDisplay=document.getElementById('time-display');
var timeLogging=new Array;
var dateLogging= new Array();
var log= [];


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
function store(instance){
	// CHECK IF THERE IS LOCALSTORAGE DATA SO THAT YOU AVOID OVERWRITING IT
	if (localStorage.length>0) {
		console.log(logger);
		log=JSON.parse(localStorage.getItem('logger'));
		log.push(instance);
		logger=JSON.stringify(log);
		localStorage.setItem('logger',logger);
		console.log(log);
		// alert(2);
	}
	else {
		// alert(1);
		console.log(instance);
		log.push(instance);
		console.log(log);
		logger=JSON.stringify(log);
		console.log(logger);		
    	localStorage.setItem('logger',logger);
	}
	console.log(log);
	return log;
}


// var ten;
document.querySelector('#test').addEventListener('click',function(){
	allTimeLog();
	store(timeLog(allTimeLog()));
	// ten=localStorage;
	
	console.log(log);
	console.log(allTimeLog());
// 	for(var i =0; i < localStorage.length; i++){
//   console.log(localStorage.getItem(localStorage.key(i)));
// }
 //  if(window.localStorage) {
 //    console.log('ls exists');

	// }
	// console.log(ten);
});









// old code to be rewritten



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


// When draw graph is called it captures and store the current data of start time
function dataSortEven(sto) {
	var startTimes= new Array();
	// console.log(timeLogging.length);
	// console.log(timeLogging);
	for (n=0; n<log.length; n++){
		if (n%2===0){
			startTimes.push(log[n]);
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
// console.log(timeStamps());


document.querySelector("#recorder").addEventListener("click",function(){
	buttonText();
	allTimeLog();
	// timeLogger();
	timeDisplay.innerText=timeLog(allTimeLog());
	timeStamps();
	dataSortEven(store(timeLog(allTimeLog())));
	dataSortOdd(store(timeLog(allTimeLog())));
	console.log(store(timeLog(allTimeLog())));
	chartTime(dataSortOdd());
	// console.log(chartTime(dataSortOdd()));
	console.log(logger.timeStamp);
    console.log(chartTime(dataSortOdd()));
    console.log(logger.timeStamp);
    console.log(timeStamps());


// CONVERTING TO string

// console.log(Logger);

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




// LOCAL STORAGE HAPPENING HERE
if(window.localStorage) {
    console.log('ls exists');
 //    if(!window.timeLogging) {
	// 	var timeLogging =new Array();
	// 	console.log(1);
	// }
	// else{

	// }
    // var localLogger=JSON.stringify(timeLogging);
    // localStorage.setItem('logger',localLogger);
    // console.log(localStorage.getItem('logger'));
} else {
    console.log('ls does not exist');
}