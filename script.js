window.onload = function () {
    createGrid(10); // Default 10x10 grid

    // Grid size selection event listener
    document.getElementById('gridSizeSelector').addEventListener('change', function() {
        const gridSize = parseInt(this.value);
        createGrid(gridSize);
    });
};

// Create grid based on selected size
function createGrid(size) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear previous grid

    // Update the grid style for correct layout
    const columns = Math.floor(Math.sqrt(size)); // Calculate number of columns
    canvas.style.gridTemplateColumns = `repeat(${columns}, 30px)`; // Update columns dynamically

    // Create the correct number of pixel divs
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#ccc";
        canvas.appendChild(pixel);
    }
}

// Apply language and generate art
document.getElementById('generateButton').addEventListener('click', function() {
    applyLanguage();
});

// Apply the language to color the pixels
function applyLanguage() {
    const input = document.getElementById('languageInput').value;
    const pixels = document.querySelectorAll('#canvas div');
    
    pixels.forEach(pixel => pixel.style.backgroundColor = "#ccc"); // Reset canvas before applying new colors

    const instructions = input.split(',');

    instructions.forEach(instruction => {
        const parts =
