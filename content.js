const collection = document.getElementsByClassName("time-since");

var dateArray = "";
var dateString = "";
var dateFinalArray = "";
var daysAgo = "";

for (let i = 0; i < collection.length; i++) {

  // console.log(collection[i]);
  // collection[i].style.backgroundColor = "red";
  // Original time format below
  // Thu, 03 Nov 2022 18:22:03 UTC
  dateArray = collection[i].getAttribute('data-content').split(" ");
  daysAgo = collection[i].textContent;

  dateArray[0] = "";
  dateString = dateArray.join(' ');
  dateString = new Date(dateString).toLocaleString();
  dateFinalArray = dateString.split(" (");
  console.log(dateFinalArray[0] + " (" + daysAgo + ")");
  collection[i].textContent = (dateFinalArray[0] + " (" + daysAgo + ")");

}