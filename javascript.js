let gridSize = 16;
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

function addBoxes() {
    let pageWidth = window.innerWidth;
    let boxWidth = parseFloat(pageWidth)/(gridSize + 1); // dividing by the base number does not distribute enough space so we use +1 instead
    let pageHeight = window.innerHeight;
    let boxHeight = parseFloat(pageHeight)/(gridSize + 1); 

    for (let i = 0; i < gridSize; i++){
        for (let j = 0; j < gridSize; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
        }
    }
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((currentValue) =>{
        currentValue.style.minWidth = boxWidth + "px";
        currentValue.style.minHeight = boxHeight + "px";
    })
    boxes.forEach((currentValue) => {
        currentValue.addEventListener("mouseover", () => {
            currentValue.style.backgroundColor = "black";
        })
    })
}
