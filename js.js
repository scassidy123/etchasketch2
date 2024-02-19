
// select the three button elements
let sixtyFour = document.getElementById("64");
let oneHundred = document.getElementById("100");
let resetButton = document.getElementById("reset");
let lastCanvasSize;

//add event listeners to my 3 buttons
sixtyFour.addEventListener("click",  () => lastCanvasSize = 20)
sixtyFour.addEventListener("click", () => populateScreen(lastCanvasSize));

oneHundred.addEventListener("click",  () => lastCanvasSize = 40)
oneHundred.addEventListener("click", () => populateScreen(lastCanvasSize));

resetButton.addEventListener("click", () => populateScreen(lastCanvasSize));


//start a new canvas
function populateScreen(num) {
    console.log(lastCanvasSize);
    console.log(num);
    let screen = document.querySelector(".screen");
    screen.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    // Remove existing squares
    let generated = document.querySelectorAll(".generated");
    generated.forEach(element => {
        element.remove();
    });

    // Create new squares and add event listeners
    for (let i = 0; i < num * num; i++) {
        let square = document.createElement("div");
        // square.style.background = 'white';
        square.style.border = "1px solid black";
        square.style.borderColor = "rgba(0,0,0,0.025)";
        square.classList.add("generated");
        screen.appendChild(square);
    }

    // Add event listeners to new squares
    document.querySelectorAll(".generated").forEach(element => {
        element.addEventListener("mouseover", function() {
            this.classList.add("new-color");
        });
    });
}

populateScreen(lastCanvasSize)
