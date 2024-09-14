function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
}

function paint(cell) {
    if (cell.style.backgroundColor === "")
        cell.style.backgroundColor = parseFloat(cell.style.backgroundColor) || randColor();
    cell.style.opacity = Math.min((parseFloat(cell.style.opacity) || 0) + 0.1, 1.0);
}

function setup(n) {
    let container = document.querySelector(".container");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < n; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                paint(cell);
            });
            column.appendChild(cell);
        }
        container.appendChild(column);
    }
}

function main() {
    setup(16);
    button = document.querySelector(".reset button");
    button.addEventListener("click", () => {
        let input;
        let number;
        do {
            input = prompt("Please enter a number:");
            number = parseInt(input);
        } while (isNaN(number));
        number = Math.min(number, 100);
        setup(number);
    })
}

main()