window.onload = function () {
    const canvas = document.getElementById('canvas');
    const gridSize = 10; // 10x10 grid

    // Create grid (10x10)
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.style.backgroundColor = "#ccc"; // Default color (light gray)
        canvas.appendChild(pixel);
    }
};

// Function to apply the language input to the canvas
function applyLanguage() {
    const input = document.getElementById('languageInput').value;
    const pixels = document.querySelectorAll('#canvas div');
    
    // Reset canvas before applying new colors
    pixels.forEach(pixel => pixel.style.backgroundColor = "#ccc");

    // Split the input by commas (language format: "Pixel X is color")
    const instructions = input.split(',');

    instructions.forEach(instruction => {
        // Clean up the instruction (remove extra spaces)
        const parts = instruction.trim().split(' ');

        // Ensure we have the correct format: Pixel X is color
        if (parts.length === 4 && parts[0].toLowerCase() === 'pixel' && parts[2].toLowerCase() === 'is') {
            const pixelIndex = parseInt(parts[1]) - 1; // Convert Pixel number to index (1-based to 0-based)
            const color = parts[3]; // Extract the color (assuming format: "Pixel X is color")

            // Check if the pixel index is
