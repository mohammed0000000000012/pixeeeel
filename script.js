window.onload = function () {
    generateGrid(); // Default 10x10 grid on load
};

function generateGrid() {
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear previous grid
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 16px)`; 
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 16px)`; 
    canvas.style.width = `${gridSize * 16}px`;
    canvas.style.height = `${gridSize * 16}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.dataset.index = i;
        pixel.style.backgroundColor = "transparent";
        pixel.addEventListener('click', function () {
            pixel.style.backgroundColor = pixel.style.backgroundColor === 'black' ? 'transparent' : 'black';
        });
        canvas.appendChild(pixel);
    }
}

document.getElementById('gridSize').addEventListener('change', generateGrid);

function applyColors() {
    const input = document.getElementById('colorInput').value.trim().split('\n');
    const pixels = document.querySelectorAll('#canvas div');
    const gridSize = parseInt(document.getElementById('gridSize').value);
    
    input.forEach(line => {
        const match = line.match(/\((\d+),(\d+)\):\s*(#[0-9a-fA-F]{3,6}|rgba?\(\d+,\d+,\d+(,\d*\.?\d+)?\)|[a-zA-Z]+)(?:,\s*alpha:\s*(\d*\.?\d+))?/);
        if (match) {
            let row = parseInt(match[1]) - 1;
            let col = parseInt(match[2]) - 1;
            let color = match[3];
            let alpha = match[5] ? parseFloat(match[5]) : 1;
            if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
                let index = row * gridSize + col;
                pixels[index].style.backgroundColor = color;
                pixels[index].style.opacity = alpha;
            }
        }
    });
}
