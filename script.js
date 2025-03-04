// This code create a button on top of my webpage
const button = document.querySelector(".btn");

// This function take in the number input by the user
function displayPopup() {
  const gridSize = parseInt(prompt("Please enter the number of squares you want for your grid (maximum 100):"));
  return (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) ? alert("Please enter a valid number between 1 and 100.") : createGrid(gridSize);
}


const container = document.querySelector("#container");

let isMouseDown = false;

// The function below create my Grids dynamically when it is called
function createGrid(size) {
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');
    gridItem.style.flex = `1 0 calc(100% / ${size})`; 

    gridItem.addEventListener('mousedown', () => {
      isMouseDown = true;
      changeColor(gridItem);
    });

    gridItem.addEventListener('mouseover', () => {
      if (isMouseDown) {
        changeColor(gridItem);
      }
    });

    gridItem.addEventListener('mouseup', () => {
      isMouseDown = false;
    });

    gridItem.addEventListener('mouseleave', () => {
      if (isMouseDown) {
        changeColor(gridItem);
      }
    });

    container.appendChild(gridItem);
  }

  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
}


function changeColor(gridItem) {
  gridItem.style.backgroundColor = `#${getRandomColor()}`;
}


function getRandomColor() {
  return Math.floor(Math.random() * 16849305).toString(16).padStart(6, '0');
}