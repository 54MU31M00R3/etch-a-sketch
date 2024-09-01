let gridSize = 16;
let boxWidth;
let boxHeight;
const grid = document.querySelector("#container");

window.addEventListener("resize", addBoxes);

window.dispatchEvent(new Event("resize"));

const newGridBtn = document.querySelector("#grid");
newGridBtn.addEventListener("click", () => {
    do {
        gridSize = parseFloat(prompt("Please enter a grid size less than 100."));
    } while (!(gridSize < 100 && gridSize > 0))
    
        while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    addBoxes()
})

const boxes = document.querySelectorAll(".box");
boxes.forEach((currentValue) =>{
    currentValue.style.minWidth = boxWidth + "px";
    currentValue.style.minHeight = boxHeight + "px";
    
    currentValue.addEventListener("mouseover", () => {
        currentValue.style.backgroundColor = generateRGB();

        currentValue.style.setProperty("--grid_opacity", generateOpacity(currentValue));

    })
})

function addBoxes() {
    let pageWidth = window.innerWidth;
    boxWidth = parseFloat(pageWidth)/(gridSize + 1); // dividing by the base number does not distribute enough space so we use +1 instead
    let pageHeight = window.innerHeight;
    boxHeight = parseFloat(pageHeight)/(gridSize + 1); 

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
        }
    }
}

function generateRGB() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

function generateOpacity(currentValue){
    const boxStyles = window.getComputedStyle(currentValue);
    const currentOpacity = parseFloat(boxStyles.getPropertyValue("opacity"));
    const newOpacity = Math.min(currentOpacity + 0.1, 1);
    return newOpacity
}