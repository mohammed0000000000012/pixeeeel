let gridSize = 10;

function generateGrid() {
    gridSize = parseInt(document.getElementById('gridSize').value);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear the canvas before generating a new one
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Adjust grid size
    canvas.style.width = `${gridSize * 30}px`;
    canvas.style.height = `${gridSize * 30}px`;

    // Generate individual pixels
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.dataset.index = i; // Store the index in the dataset for each pixel
        canvas.appendChild(pixel);
    }
}

function applyColors() {
    const input = document.getElementById('colorInput').value.trim().split('\n');
    const pixels = document.querySelectorAll('#canvas div');

    input.forEach(line => {
        const match = line.match(/\((\d+),(\d+)\):\s*(#[0-9a-fA-F]{6}|[a-zA-Z]+)/); // Match pattern for coordinates and color
        if (match) {
            let row = parseInt(match[1]) - 1; // Adjust for 0-indexed grid
            let col = parseInt(match[2]) - 1; // Adjust for 0-indexed grid
            let color = match[3]; // Get the color

            // Check if the coordinates are within bounds
            if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
                let index = row * gridSize + col;
                pixels[index].style.backgroundColor = color; // Apply the color to the pixel
            }
        }
    });
}

// Initialize grid when the page loads
window.onload = generateGrid;
