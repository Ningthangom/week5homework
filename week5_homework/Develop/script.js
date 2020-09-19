//const calendar = document.querySelector('#app-calendar');
//console.log(calendar);
let startHour = 1;
let MidDay = 24;
let hoursDay = Array(MidDay - startHour+1)
.fill()
.map(()=>startHour++);
console.log(hoursDay);
/*
for (var i = 0; i < hoursDay.length; i++){
    let hoursDay1 = [];
    hoursDay1 = hoursDay(i) + "am";
}
console.log(hoursDay1);
*/
/*
for (var i = 0; i < hoursDay.length; i++){
    document.createElement("button");
   // document.createAttribute("button",hoursDay[i]);
    button.innerHTML = hoursDay[i];
}
*/

/*
for (var i = 0 ; i<hoursDay; i++){
    var btn = document.createElement("button");
    btn.innerHTML = hoursDay[i];
    document.body.appendChild(btn[i]);
}
*/
/*
var btn = document.createElement("button");
btn.innerHTML = hoursDay[0];
btn.innerHTML = hoursDay[1];

document.body.appendChild(btn);
*/
/*
var btn = document.createElement("button");
btn.innerHTML = hoursDay[0];
document.body.appendChild(btn);

var btn = document.getElementById("two");
btn.innerHTML = hoursDay[1];
document.body.appendChild(btn);

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.write(time);
console.log(time);

*/
/*
var nowMoment = moment();
console.log(nowMoment);

var nowDate = new Date();
console.log(nowDate);
*/



(function()
{
  // instantiate a moment object
  var NowMoment = moment().format("DD:MM:YYYY hh:mm a");
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('now');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  //var eDisplayDate = document.getElementById('displayJsDate');
  //eDisplayDate.innerHTML = NowDate;
})();

// make html hours equal to moment hours
var hourNow = moment().format("hh");
console.log(hourNow);


var eightAm = document.getElementById('eight').value

if (hourNow < eightAm){
    console.log("it's before 8")
}
else if (hourNow == eightAm){
    console.log("now it should be green")
}else if (hourNow > eightAm){
    console.log("now its passed 8")

}else{

}

var nineAm = document.getElementById('nine').value

if (hourNow < nineAm){
    console.log("it's before 9")
}
else if (hourNow == nineAm){
    console.log("now it should be green")
}else if (hourNow > nineAm){
    console.log("now its passed nine")

}else{

}


/*
let currentDateTime = new Date();
    let formattedTime = currentDateTime.getHours() + ":" + currentDateTime.getMinutes() +":" + currentDateTime.getSeconds();
    console.log(formattedTime)


    function getTwelveHours(){
        if (i < 10) {
            i = "0" + i;
        }
        return i;
        }

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('textbox').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
        }
        startTime();

        function checkTime(i) {
            if (i<10) {i = "0" + i}; 
            return i;
         }

         */

