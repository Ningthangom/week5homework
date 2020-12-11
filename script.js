/* $(document).ready(function(){ */
    $(".save").on('click',function (){
      /*   console.log( $(".description").val()); */
       console.log($(this).parent().prev().val())
       console.log($(this).val())
       //save id and message (id = time ) and inputtext == message to local 
       // look into local storage method    


    }) 
    


/* function() */
/* { */
  // instantiate a moment object
  var NowMoment = moment().format("DD:MM:YYYY hh:mm a");
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('now');
  eDisplayMoment.innerHTML = NowMoment;
  

// make html hours equal to moment hours
var hourNow = moment().format("HH");
console.log(hourNow);


var eightAm = document.getElementById('eight').value

if (hourNow < eightAm){
    console.log("it's after 12")
    $(".eightam").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == eightAm){
    console.log("now it should be green")
    $(".eightam").css("background-color","red");
}else if (hourNow > eightAm){
    console.log("now it's before 12")
    $(".eightam").css("background-color","orange");

}else{

}

var nineAm = document.getElementById('nine').value

if (hourNow < nineAm){
    console.log("it's after 12")
    $(".nineam").css("background-color","green");

}
else if (hourNow == nineAm){
    console.log("now it should be red")
    $(".nineam").css("background-color","red");
}else if (hourNow > nineAm){
    console.log("now its passed nine")
    $(".nineam").css("background-color","orange");

}else{

}

var tenAm = document.getElementById('ten').value

if (hourNow < tenAm){
    console.log("it's BEFORE 12")
    $(".tenam").css("background-color","green");

}
else if (hourNow == nineAm){
    console.log("now it should be red")
    $(".tenam").css("background-color","red");
}else if (hourNow > tenAm){
    console.log("now its passed nine")
    $(".tenam").css("background-color","orange");

}else{

}
var elevenAm = document.getElementById('eleven').value

if (hourNow < elevenAm){
    console.log("it's before eleven")
    $(".elevenam").css("background-color","green");

}
else if (hourNow == elevenAm){
    console.log("now it should be red")
    $(".elevenam").css("background-color","red");
}else if (hourNow > elevenAm){
    console.log("now its passed eleven")
    $(".elevenam").css("background-color","orange");

}else{

}

var twelvePm = document.getElementById('twelve').value
if (hourNow < twelvePm){
    console.log("it's after 12")
    $(".twelvepm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == twelvePm){
    console.log("now it should be RED")
    $(".twelvepm").css("background-color","red");
}else if (hourNow > twelvePm){
    console.log("now it's before 12")
    $(".twelvepm").css("background-color","orange");

}else{

}

// colour for one pm
var onePm = document.getElementById('one').value
if (hourNow < onePm){
    console.log("it's after 12")
    $(".onepm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == onePm){
    console.log("now it should be RED")
    $(".onepm").css("background-color","red");
}else if (hourNow > onePm){
    console.log("now it's before 12")
    $(".onepm").css("background-color","orange");

}else{

}

var twoPm = document.getElementById('two').value
if (hourNow < onePm){
    console.log("it's after 12")
    $(".twopm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == twoPm){
    console.log("now it should be RED")
    $(".twopm").css("background-color","red");
}else if (hourNow > twoPm){
    console.log("now it's before 12")
    $(".twopm").css("background-color","orange");

}else{

}

var threePm = document.getElementById('three').value
if (hourNow < threePm){
    console.log("it's after 12")
    $(".threepm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == threePm){
    console.log("now it should be RED")
    $(".threepm").css("background-color","red");
}else if (hourNow > twoPm){
    console.log("now it's before 12")
    $(".threepm").css("background-color","orange");

}else{

}

var fourPm = document.getElementById('four').value
if (hourNow < fourPm){
    console.log("it's after 12")
    $(".fourpm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == fourPm){
    console.log("now it should be RED")
    $(".fourpm").css("background-color","red");
}else if (hourNow > fourPm){
    console.log("now it's before four")
    $(".fourpm").css("background-color","orange");

}else{

}
var fivePm = document.getElementById('five').value
if (hourNow < fivePm){
    console.log("it's after 12")
    $(".fivepm").css("background-color","green");
    //select class or id 
    //then select css method
    //set color to gray
}
else if (hourNow == fivePm){
    console.log("now it should be RED")
    $(".fivepm").css("background-color","red");
}else if (hourNow > fivePm){
    console.log("now it's before 12")
    $(".fivepm").css("background-color","orange");

}else{

}


/* }) */


let startHour = 1;
let MidDay = 24;
let hoursDay = Array(MidDay - startHour+1)
.fill()
.map(()=>startHour++);
console.log(hoursDay);
