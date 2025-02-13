window.onload = function () {
    const canvas = document.getElementById('canvas');
    const languageOutput = document.getElementById('languageOutput');
    const gridSize = 10; // 10x10 grid

    // Create grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.addEventListener('click', function () {
            // Toggle the color of the pixel between black and gray
            pixel.style.backgroundColor = pixel.style.backgroundColor === 'black' ? '#ccc' : 'black';
            updateLanguage();
        });
        canvas.appendChild(pixel);
    }

    // Update the language output
    function updateLanguage() {
        let languageCode = '';
        const pixels = canvas.querySelectorAll('div');
        pixels.forEach((pixel, index) => {
            if (pixel.style.backgroundColor === 'black') {
                languageCode += `Pixel ${index + 1} is black\n`;
            }
        });
        languageOutput.textContent = languageCode;
    }
};
