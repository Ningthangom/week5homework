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
var hourNow = moment().format("H");
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

var tenAm = document.getElementById('ten').value

if (hourNow < tenAm){
    console.log("it's before 10")
}
else if (hourNow == tenAm){
    console.log("now it should be green")
}else if (hourNow > tenAm){
    console.log("now its passed 10")

}else{

}
var elevenAm = document.getElementById('eleven').value

if (hourNow < elevenAm){
    console.log("it's before eleven")
}
else if (hourNow == elevenAm){
    console.log("now it should be green")
}else if (hourNow > elevenAm){
    console.log("now its passed eleven")

}else{

}
var twelvepm = document.getElementById('twelve').value

if (hourNow < twelvepm){
    console.log("it's before twelve")
}
else if (hourNow == twelvepm){
    console.log("now it should be green")
}else if (hourNow > twelvepm){
    console.log("now its passed twelve")

}else{

}

var onepm = document.getElementById('one').value

if (hourNow < onepm){
    console.log("it's before onepm")
}
else if (hourNow == onepm){
    console.log("now it should be green")
}else if (hourNow > onepm){
    console.log("now its passed onepm")

}else{

}
console.log(hourNow);

var twopm = document.getElementById('two').value

if (hourNow < twopm ){
    console.log("it's before twopm ")
}
else if (hourNow == twopm ){
    console.log("now it should be green")
}else if (hourNow > twopm ){
    console.log("now its passed twopm ")

}else{

}

var threepm = document.getElementById('three').value

if (hourNow < threepm){
    console.log("it's before threepm")
}
else if (hourNow == threepm){
    console.log("now it should be green")
}else if (hourNow > threepm){
    console.log("now its passed threepm")

}else{

}

var fourpm = document.getElementById('four').value

if (hourNow < fourpm){
    console.log("it's before fourpm")
}
else if (hourNow == threepm){
    console.log("now it should be green")
}else if (hourNow > fourpm){
    console.log("now its passed fourpm")

}else{

}

var fivepm = document.getElementById('five').value

if (hourNow < fivepm ){
    console.log("it's before fivepm ")
}
else if (hourNow == fivepm ){
    console.log("now it should be green")
}else if (hourNow > fivepm ){
    console.log("now its passed fivepm ")

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

