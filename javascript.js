const grid = document.querySelector("#container");

window.addEventListener("resize", addBoxes);

window.dispatchEvent(new Event("resize"));

const boxes = document.querySelectorAll(".box");

boxes.forEach((currentValue) => {
    currentValue.addEventListener("mouseover", () => {
        currentValue.style.backgroundColor = "black";
    })
})

function addBoxes() {
    let pageWidth = window.innerWidth;
    let boxWidth = parseFloat(pageWidth)/17; // dividing by 16 does not distribute enough space to have 16 boxes so we use 17 instead
    let pageHeight = window.innerHeight;
    let boxHeight = parseFloat(pageHeight)/17;

    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
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
}
