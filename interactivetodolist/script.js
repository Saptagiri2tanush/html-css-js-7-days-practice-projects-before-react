// 
// 1️⃣ Select DOM elements
// 
let inputElement = document.querySelector(".whatneeds");
let formElements = document.getElementsByTagName('form');
let inputText = formElements[0].getElementsByTagName('input');
let addBtn = formElements[0].getElementsByTagName('button');
let filterB = document.querySelectorAll(".filters button");
let btnCc = document.getElementById("clearCompleted");
let taskList = document.getElementById("taskList");

// 
// 2️⃣ Add task

formElements[0].addEventListener("submit", function(e){
    e.preventDefault();

    // ✅ Validation: ignore empty input
    if (!inputText[0].value.trim()) return;

    console.log(inputText[0].value);

    // Create li and span
    let li = document.createElement('li');
    let spanE = document.createElement('span');
    spanE.innerText = inputText[0].value;

    li.appendChild(spanE);
    taskList.appendChild(li);

    // Create tick button
    let btnTick = document.createElement('button');
    btnTick.innerText = "✔";
    li.appendChild(btnTick);

    // Create remove button
    let btnRemove = document.createElement('button');
    btnRemove.innerText = "remove";
    li.appendChild(btnRemove);

    // ✅ Tick event
    btnTick.addEventListener('click', function(){
        spanE.classList.toggle("Completed");
    });

    // ✅ Remove event
    btnRemove.addEventListener("click", function(){
        li.remove();
    });

    // Clear input after adding
    inputText[0].value = "";
});


// 3️⃣ Filter tasks

for (let i = 0; i < filterB.length; i++) {
    filterB[i].addEventListener("click", function(e){
        let filerC = e.target.dataset.filter;
        console.log(filerC);

        let items = taskList.querySelectorAll("li");

        for (let i = 0; i < items.length; i++) {
            let liEl = items[i];
            let span = liEl.querySelector('span');

            if (filerC === "all") {
                liEl.style.display = "flex";
            } 
            else if (filerC === "active") {
                liEl.style.display = !span.classList.contains("Completed") ? "flex" : "none";
            } 
            else if (filerC === "Completed") {
                liEl.style.display = span.classList.contains("Completed") ? "flex" : "none";
            }
        }
    });
}


// 4️⃣ Clear completed tasks

btnCc.addEventListener("click", function(){
    let items = taskList.querySelectorAll("li");

    for (let i = 0; i < items.length; i++) {
        let span = items[i].querySelector('span');
        if (span.classList.contains("Completed")) {
            items[i].remove();
        }
    }
});
