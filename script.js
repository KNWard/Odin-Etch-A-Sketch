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