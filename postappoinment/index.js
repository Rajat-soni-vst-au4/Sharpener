let form = document.querySelector('#form');
let name = document.querySelector("#name1")
let email = document.querySelector("#email1")
let number = document.querySelector("#number1")
let date = document.querySelector("#date")
let time = document.querySelector("#time");


var items = document.querySelector(".items")

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

       try {
        axios.post("https://crudcrud.com/api/d60d961c83ee474abf714213b4bffdf5/appoinmentsdata", Data)
            // .then(data => showUser(data.data))
       } catch (error) {
            console.log(err)
       }
    showUser()
}

//adding datalist of appoinments

function showUser(){
    try {
         axios.get("https://crudcrud.com/api/d60d961c83ee474abf714213b4bffdf5/appoinmentsdata")
            .then(array => console.log(array.data))
    } catch (error) {
            console.log(err)
    }
    var a = 0
    for(let i=a; i<array.data.length; i++){
        let newElem = document.createElement("li");
        newElem.textContent = array.data[i].name +"   -   "+ array.data[i].email + "   -   "+ array.data[i].number + "   -   " + array[i].Date + "           ";
        
        //delete button added
        let button = document.createElement("input");
        button.type = "button"
        button.value = "Delete";
        button.addEventListener("click", function (){
            items.removeChild(newElem)
       
        } )

        //edit button added
        let edit = document.createElement("input");
        edit.type = "button"
        edit.value = "edit";
        edit.addEventListener("click", function(){
            items.removeChild(newElem)
      
        })

        newElem.append(button,edit)
        items.appendChild(newElem)
        } 
      
        a = array.data.length-1
    }
   
