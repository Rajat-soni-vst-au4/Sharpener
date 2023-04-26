//Examine the document object
var title = document.getElementById("main-header");
title.style.borderBottom = "4px solid black";

var head = document.all[14]
// console.log(head)
head.innerHTML = "ADD ITEM";
head.style.color = "green";

var items = document.getElementsByClassName("list-group-item");

items[2].style.backgroundColor = "green";

for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold";
}

items[1].style.backgroundColor = "green";
items[2].style.display = "none";
