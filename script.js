const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


    let var3 = function() {
    if (inputBox.value === "") {
        alert("you must write something!");


    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild("li");

    }
}

inputBox.addEventListener("click" ,var3 );
