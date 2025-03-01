let gridSize = 10;

function generateGrid() {
    gridSize = parseInt(document.getElementById('gridSize').value);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear existing grid
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Adjust number of columns
    canvas.style.width = `${gridSize * 30}px`;
    canvas.style.height = `${gridSize * 30}px`;

    // Generate the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.dataset.index = i;
        canvas.appendChild(pixel);
    }
}

function applyColors() {
    const input = document.getElementById('colorInput').value.trim().split('\n');
    const pixels = document.querySelectorAll('#canvas div');

    input.forEach(line => {
        const match = line.match(/\((\d+),(\d+)\):\s*(#[0-9a-fA-F]{6}|[a-zA-Z]+)/); // Match (x,y): color
        if (match) {
            let row = parseInt(match[1]) - 1;
            let col = parseInt(match[2]) - 1;
            let color = match[3];
            
            if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
                let index = row * gridSize + col;
                pixels[index].style.backgroundColor = color;
            }
        }
    });
}

window.onload = generateGrid;
