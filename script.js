// This code create a button on top of my webpage
const button = document.querySelector(".btn");

// This function take in the number input by the user
function displayPopup() {
  const gridSize = parseInt(prompt("Please enter the number of squares you want for your grid (maximum 100):"));
  return (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) ? alert("Please enter a valid number between 1 and 100.") : createGrid(gridSize);
}


const container = document.querySelector("#container");

// The function below create my Grids dynamically when it is called
function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.style.flex = `1 0 calc(100% / ${size})`; 

    gridItem.addEventListener('mouseover', () => changeColor(gridItem));

    container.appendChild(gridItem);
  }
}

// This two functions below changes and restores the grid color when hovering on them
function changeColor(element) {
  element.style.backgroundColor = 'black';
}
