const container = document.querySelector("#container");

// This code below set up my html id="container" with Flexbox
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px"; 
container.style.height = "600px"; 

// This one below create the grid items and apply the hover effect to them
for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");

  gridItem.style.backgroundColor = "white";
  gridItem.style.border = "1px solid black";
  gridItem.style.boxSizing = "border-box";
  gridItem.style.flex = "1 0 calc(100% / 16)"; 
  gridItem.style.aspectRatio = "1"; 

  gridItem.addEventListener('mouseover', () => changeColor(gridItem));
  gridItem.addEventListener('mouseout', () => restoreColor(gridItem));

  container.appendChild(gridItem);
}

// This two functions below changes and restores the grid color when hovering on them
function changeColor(element) {
  element.style.backgroundColor = 'black';
}

function restoreColor(element) {
  element.style.backgroundColor = 'white';
}


const btn = document.createElement("button");
container.insertBefore(btn, container);
btn.classList.add("myButton");
btn.textContent = "Click Me";

