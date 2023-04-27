let form = document.querySelector('#form');
let name = document.querySelector("#name1")
let email = document.querySelector("#email1");
let number = document.querySelector("#number1")
let date = document.querySelector("#date")
let time = document.querySelector("#time")
form.addEventListener("submit", onsubmit);

function onsubmit(e){
e.preventDefault();

localStorage.setItem("name", name.value)
localStorage.setItem("email", email.value)
localStorage.setItem("number", number.value)
localStorage.setItem("Date&time", date.value +"&"+ time.value)

alert("Your information has been shared and you'll get call soon.")
}