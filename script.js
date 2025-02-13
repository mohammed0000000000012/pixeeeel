window.onload = function () {
    const canvas = document.getElementById('canvas');
    const gridSize = 10; // 10x10 grid
    
    // Create grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#ccc"; // Default color
        canvas.appendChild(pixel);
    }
};

// Function to apply the language input to the canvas
function applyLanguage() {
    const input = document.getElementById('languageInput').value;
    const pixels = document.querySelectorAll('#canvas div');
    
    // Reset canvas
    pixels.forEach(pixel => pixel.style.backgroundColor = "#ccc");
    
    // Parse input and apply colors to pixels
    const instructions = input.split(','); // Split language by commas
    
    instructions.forEach(instruction => {
        const parts = instruction.trim().split(' ');
        const pixelIndex = parseInt(parts[1]) - 1; // Convert Pixel number to index (1-based to 0-based)
        const color = parts[3]; // Extract color (assuming format: "Pixel X is color")
        
        if (pixels[pixelIndex]) {
            pixels[pixelIndex].style.backgroundColor = color;
        }
    });

    // Output the language
    document.getElementById('output').textContent = input;
}
