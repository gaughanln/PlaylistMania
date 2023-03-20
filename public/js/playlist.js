const favDiv = document.querySelector("#favorites");

for (var i = 0; i < localStorage.length; i++) {
    // Get the key of the current item
    var key = localStorage.key(i);
  
    // Get the value of the current item
    var value = localStorage.getItem(key);

    var divEl = document.createElement("div");
    divEl.innerHTML = value;

    favDiv.appendChild(divEl);
}

const deleteBtn = document.querySelectorAll(".trash");

deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        const parent = btn.parentElement.parentElement.parentElement.parentElement;
        const grandParent = parent.parentElement;
        grandParent.removeChild(parent);
        localStorage.removeItem(parent.querySelector(".card-title").textContent);
    });
});