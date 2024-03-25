const container = document.createElement("div");
container.setAttribute("class", "container");

const text = document.createElement("p");
text.setAttribute("class", "description")
text.textContent = "Etch-a-Sketch box";
document.body.appendChild(text)

document.body.appendChild(container);


function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }

for (let i = 0; i < 16; i++) {
    let gridRow = document.createElement("div");
    gridRow.setAttribute("class", "gridRow")
    for (let i = 0; i < 16; i++) {
        let gridItem = document.createElement("div");
        gridItem.setAttribute("class", "gridObject")
        // gridItem.textContent = "1";
        gridRow.appendChild(gridItem);
    }
    container.appendChild(gridRow);
}

// document.body.removeChild(container)

const colorChange = document.querySelectorAll(".gridObject")

// colorChange.forEach((gridItem) => {
//     gridItem.addEventListener("mouseenter", (event) => {
//         gridItem.style.backgroundColor = randomColor();
//     })
// })


function attachColorChangeListeners() {
    const colorChange = document.querySelectorAll(".gridObject");

    colorChange.forEach((gridItem) => {
        gridItem.addEventListener("mouseenter", (event) => {
            gridItem.style.backgroundColor = randomColor();
        });
    });
}

attachColorChangeListeners();

let gridDimension = document.createElement("button");
gridDimension.setAttribute("class", "dimensions");
gridDimension.textContent = "Change Dimensions (Max: 100; Initial 16)";

document.body.appendChild(gridDimension)

gridDimension.addEventListener("click", () => {
    let dimension = parseInt(prompt("Enter New Dimension (Max: 100): "));
    if (typeof dimension === 'number' && dimension > 0 && dimension < 101) {
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);

        }

        for (let i = 0; i < dimension; i++) {
            let gridRow = document.createElement("div");
            gridRow.setAttribute("class", "gridRow")
            for (let i = 0; i < dimension; i++) {
                let gridItem = document.createElement("div");
                gridItem.setAttribute("class", "gridObject")
                // gridItem.textContent = "1";
                gridRow.appendChild(gridItem);
            }
            container.appendChild(gridRow);
        }
    } else {
        alert("Enter a valid number!")
    }
    attachColorChangeListeners()
})