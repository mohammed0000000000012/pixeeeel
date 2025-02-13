window.onload = function () {
    createGrid(10); // Default 10x10 grid on load
};

// Create grid based on selected size
function createGrid(size) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear previous grid

    // Update the grid style for correct layout
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Dynamically create grid columns
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Dynamically create grid rows

    // Create the correct number of pixel divs
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#ccc"; // Default color
        pixel.addEventListener('click', function () {
            // Toggle between black and default color on click
            pixel.style.backgroundColor = pixel.style.backgroundColor === 'black' ? '#ccc' : 'black';
            updateLanguage();
        });
        canvas.appendChild(pixel);
    }
}

// Grid size selection event listener
document.getElementById('gridSizeSelector').addEventListener('change', function () {
    const gridSize = parseInt(this.value);
    createGrid(gridSize);
});

// Update the language output based on the canvas
function updateLanguage() {
    const pixels = document.querySelectorAll('#canvas div');
    let languageCode = '';
    pixels.forEach((pixel, index) => {
        if (pixel.style.backgroundColor === 'black') {
            languageCode += `Pixel ${index + 1} is black, `;
        }
    });
    document.getElementById('languageOutput').textContent = languageCode;
}
