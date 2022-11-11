const collection = document.getElementsByClassName("time-since");
// user setpoints
var timeOffset = -7;
var timeZone = "MST";

var dateString = "";
var dateArray = "";
var timeString = "";
var newHour = "";
for (let i = 0; i < collection.length; i++) {

  // console.log(collection[i]);
  // collection[i].style.backgroundColor = "red";
  // Original time format below
  // Thu, 03 Nov 2022 18:22:03 UTC
  dateArray = collection[i].getAttribute('data-content').split(" ");
  timeString = dateArray[4].split(":");
  newHour = parseInt(timeString[0]);
  newHour = newHour + timeOffset;
  timeString[0] = newHour;
  dateArray[4] = timeString.join(':');
  dateArray[5] = timeZone;
  dateString = dateArray.join(' ');
  //dateString = collection[i].getAttribute('data-content');
  collection[i].textContent = dateString;

}