const grid = document.querySelector("#container");

window.addEventListener("resize", addBoxes);

window.dispatchEvent(new Event("resize"));

function addBoxes() {
    let pageWidth = window.innerWidth;
    let boxWidth = parseFloat(pageWidth)/17;
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
