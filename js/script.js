var submission = function() {
var daysOftheWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",

];

var malesName = [
  "kwasi",
  "kwadwo",
  "kwabena",
  "kwaku",
  "yaw",
  "kofi",
  "kwame",
];
var femaleNames = [
  "akosua",
  "adwoa",
  "abeena",
  "akua",
  "yaa",
  "afua",
  "ama",
];
var month = parseInt(document .getElementById("month").value);
var year = parseInt(document.getElementById("year").value);
var day = parseInt(document.getElementById("day").value);
var name = (document.getElementById("name").value);
var dateOfbirth = new Date (year+ "/" + month + "/" + day);
var results = dateOfbirth.getDay();
var output = document.getElementById("male")
var female = document.getElementById("female")

if (month =="" && year =="" && day =="" && name =="") {
  alert("please enter you credential");
  return false;
  
}

//if (month == null || month== "", day == null || year == "", name ==null || name == null==""){

}
//}

if (year < 0) {

  ouput.style.background = "red"
  output.style.color = "white"
  output.innerHTML = "hey ! " + name +" please enter a valid year "
}
 
//var valid = (year>0 && (month > 0 && month <= 12) (day > 0 && day <32))
//if (valid == false){  
 // alert ("no input received");
  //}

  if  (male.checked && year > 0 && month < 12 && day > 0 && day < 32) {
    output.style.background ="lime"
    output.style.background ="red"
    output.innerHTML = " hey ! " +name +" you were born on a" + daysOftheWeek[results] +"and your akanname is " + femaleNames [results];
  };