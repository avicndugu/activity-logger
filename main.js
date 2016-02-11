var recorder= document.getElementById("recorder");
var timeDisplay=document.getElementById('time-display');
var timeLogging=new Array();
var dateLogging= new Array();
console.log(timeDisplay);

function allTimeLog() {
	var d= new Date();
	var t=d.toString();
	// console.log(typeof(t));
	return t;
}

function timeLog(t){
	var time= t.slice(16,21);
	console.log(time);
	return time;
}
// function timeLogger(){
// 	timeLogging.push(timeLog(allTimeLog()));
// 	console.log(timeLogging);
// 	return timeLogging;
// }

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
var logger = {
	timeStamp: function(){
	timeLogging.push(timeLog(allTimeLog()));
	console.log(timeLogging);
	return timeLogging;
	},
	dateStamp:function(){
	dateLogging.push(dateLog(allTimeLog()));
	console.log(dateLogging);
	return dateLogging;
	}
	}

document.querySelector("#recorder").addEventListener("click",function(){
	buttonText();
	allTimeLog();
	// timeLogger();
	timeDisplay.innerText=timeLog(allTimeLog());
	console.log(logger.timeStamp());
	console.log(logger.dateStamp());
});
	
recorder



