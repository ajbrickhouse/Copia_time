var collection = document.getElementsByClassName("time-since");

for (let i = 0; i < collection.length; i++) {
  collection[i].innerHTML = collection[i].getAttribute("title").toString();
}