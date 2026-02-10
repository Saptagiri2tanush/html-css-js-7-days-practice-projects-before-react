let inputElement = document.querySelector(".whatneeds");
//console.log(inputElement);


let formElements = document.getElementsByTagName('form');
//console.log(formElements[1]);
let inputText = formElements[0].getElementsByTagName('input');
let addBtn = formElements[0].getElementsByTagName('button');

//console.log(inputText[0]);
//console.log(addBtn[0]);

formElements[0].addEventListener("submit",function(e){
    e.preventDefault();
    console.log(e);
// let inputText = formElements[0].getElementsByTagName('input');
console.log(inputText[0].value);

let li = document.createElement('li');
//let tE = document.createTextNode(inputText[0].value);
let spanE = document.createElement('span');
spanE.innerText = inputText[0].value;

li.appendChild(spanE);
document.getElementById("taskList").appendChild(li);


let btnTick = document.createElement('button');
btnTick.innerText = "✔";
li.appendChild(btnTick);

let btnRemove = document.createElement('button');
btnRemove.innerText = "remove";
li.appendChild(btnRemove);

btnTick.addEventListener('click',function(e){
    spanE.classList.toggle("completed");
    console.log(spanE);
})
btnRemove.addEventListener("click",function(){
    li.remove();
})
}
)

