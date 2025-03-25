// CREATE VARIABLES FOR HTML ELEMENTS
const gridBoard = document.querySelector("#container");
const changeSzBtn = document.querySelector("#change-sz");
const resetBtn = document.querySelector("#reset");
const drawBtn = document.querySelector("#draw");
const eraseBtn = document.querySelector("#erase");

// ALL BUTTON CONTROLS
// Button to prompt user for number input/grid size
changeSzBtn.addEventListener("click", () => {
 let newGrid = parseInt(prompt("Enter a number between 2 and 100"));
 if (newGrid > 100 || !Number(newGrid)) {
   alert("Invalid");
 }
 console.log(newGrid);
 createGrid(newGrid);
});

// Sets original grid to 16x16
let newGrid = 16;
createGrid(newGrid);
// Reset button sets grid back to 16x16 and background color to white
resetBtn.addEventListener("click", () => {
 createGrid(newGrid);
});

// Erase button
eraseBtn.addEventListener("click", () => {
eraseGrid(newGrid);
})

// Draw button
drawBtn.addEventListener("click", () => {
drawGrid(newGrid);
})

// ALL FUNCTIONS
// Function to generate random background colors
function randomColorDiv() {
 let letters = "0123456789ABCDEF";
 let color = "#";
 for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

// Function to create divs for grid
function createGrid(newGrid) {
 gridBoard.innerHTML = "";
  for (let i = 0; i < newGrid; i++) {
    const rowDivs = document.createElement("div");
    rowDivs.classList.add("row");
    for (let j = 0; j < newGrid; j++) {
      const squareDivs = document.createElement("div");
      squareDivs.classList.add("square");
      rowDivs.appendChild(squareDivs);
    }
    gridBoard.appendChild(rowDivs);
  }
 // Random color generation on hover
  const colorChange = document.querySelectorAll(".square");
  colorChange.forEach((element) => {
   element.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomColorDiv();
   })
  });
}

// Erases color squares back to white
function eraseGrid() {
 const colorChange = document.querySelectorAll(".square");
 colorChange.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
   e.target.style.backgroundColor = "#f7f5f5";
  })
 })
}

// Use after erase function/button to draw color squares
function drawGrid() {
 const colorChange = document.querySelectorAll(".square");
 colorChange.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
   e.target.style.backgroundColor = randomColorDiv();
  })
 });
}