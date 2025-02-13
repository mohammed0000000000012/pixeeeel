window.onload = function () {
    createGrid(10); // Default 10x10 grid
};

// Create grid based on selected size
function createGrid(size) {
    const canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear previous grid

    // Update the grid style for correct layout
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Dynamically create grid columns based on the size

    // Create the correct number of pixel divs
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#ccc";
        canvas.appendChild(pixel);
    }
}

// Grid size selection event listener
document.getElementById('gridSizeSelector').addEventListener('change', function() {
    const gridSize = parseInt(this.value);
    createGrid(gridSize);
});

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
        const parts = instruction.trim().split(' ');

        if (parts.length === 4 && parts[0].toLowerCase() === 'pixel' && parts[2].toLowerCase() === 'is') {
            const pixelIndex = parseInt(parts[1]) - 1;
            const color = parts[3];

            if (pixelIndex >= 0 && pixelIndex < pixels.length) {
                pixels[pixelIndex].style.backgroundColor = color;
            }
        }
    });

    document.getElementById('output').textContent = input;
}

// Random Pixel Generator
document.getElementById('randomButton').addEventListener('click', function() {
    const pixels = document.querySelectorAll('#canvas div');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'white', 'black'];

    let randomCode = '';
    pixels.forEach((pixel, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.backgroundColor = randomColor;
        randomCode += `Pixel ${index + 1} is ${randomColor}, `;
    });

    randomCode = randomCode.slice(0, -2); // Remove the last comma and space
    document.getElementById('languageInput').value = randomCode;
    document.getElementById('output').textContent = randomCode;
});

// Undo/Redo functionality
let history = [];
let currentState = 0;

document.getElementById('undoButton').addEventListener('click', function() {
    if (currentState > 0) {
        currentState--;
        restoreState(history[currentState]);
    }
});

document.getElementById('redoButton').addEventListener('click', function() {
    if (currentState < history.length - 1) {
        currentState++;
        restoreState(history[currentState]);
    }
});

function saveState() {
    const pixels = document.querySelectorAll('#canvas div');
    const state = Array.from(pixels).map(pixel => pixel.style.backgroundColor);
    history = history.slice(0, currentState + 1);
    history.push(state);
    currentState++;
}

function restoreState(state) {
    const pixels = document.querySelectorAll('#canvas div');
    state.forEach((color, index) => {
        pixels[index].style.backgroundColor = color;
    });
}

document.getElementById('languageInput').addEventListener('input', function() {
    saveState();
});

// Save and Load Projects
document.getElementById('saveButton').addEventListener('click', function() {
    const pixels = document.querySelectorAll('#canvas div');
    const colors = Array.from(pixels).map(pixel => pixel.style.backgroundColor);
    
    const blob = new Blob([JSON.stringify(colors)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'pixelArt.json';
    link.click();
});

document.getElementById('loadButton').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const colors = JSON.parse(e.target.result);
            const pixels = document.querySelectorAll('#canvas div');
            colors.forEach((color, index) => {
                pixels[index].style.backgroundColor = color;
            });
        };
        reader.readAsText(file);
    }
});
