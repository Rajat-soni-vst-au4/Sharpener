let form = document.querySelector('#form');
let name = document.querySelector("#name1")
let email = document.querySelector("#email1")
let number = document.querySelector("#number1")
let date = document.querySelector("#date")
let time = document.querySelector("#time");


var items = document.querySelector(".items"
)

//submit button action's
form.addEventListener("submit", onsubmit);
function onsubmit(e){
e.preventDefault();
items
var Data = {
    "name": name.value,
    "email": email.value,
    "number": number.value,
"Date": date.value +"&"+ time.value,
}
//storing input data as an array in local storage
var array = JSON.parse(localStorage.getItem('Data') || '[]');
array.push(Data);
localStorage.setItem('Data', JSON.stringify(array));

showUser(array)
// alert("Your information has been shared and you'll get call soon.")
}

//adding datalist of appoinments

function showUser(array){
    var a = 0
    for(let i=a; i<array.length; i++){
        let newElem = document.createElement("li");
        newElem.textContent = array[i].name +"   -   "+ array[i].email + "   -   "+ array[i].number + "   -   " + array[i].Date + "           ";
        
        //delete button added
        let button = document.createElement("input");
        button.type = "button"
        button.value = "Delete";
        button.addEventListener("click", function (){
            items.removeChild(newElem)
            localStorage.removeItem(array[i])
       
        } )

        //edit button added
        let edit = document.createElement("input");
        edit.type = "button"
        edit.value = "edit";
        edit.addEventListener("click", function(){
            items.removeChild(newElem)
            localStorage.removeItem(array[i])
        })

        newElem.append(button,edit)
        items.appendChild(newElem)
        } 
      
        a = array.length-1
    }
   
