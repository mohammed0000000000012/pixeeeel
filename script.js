/* Basic styling for the page */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

/* Styling for the title and input elements */
h1 {
    margin-top: 20px;
}

label {
    font-size: 16px;
    margin-right: 10px;
}

select {
    padding: 5px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
}

/* Canvas grid styling */
#canvas {
    display: grid;
    grid-gap: 1px;
    margin: 20px auto;
    background-color: transparent;
    width: 320px;
    height: 320px;
    border: 2px solid #000; /* Added border around the canvas for visibility */
}

/* Styling for individual pixels in the grid */
#canvas div {
    width: 30px;
    height: 30px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #ccc; /* Light grey border between cells */
    transition: background-color 0.3s ease;
}

/* Textarea for color input */
textarea {
    font-family: monospace;
    font-size: 14px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 300px;
    resize: none;
}

/* Optional: Additional button styling */
button:hover {
    background-color: #d3d3d3;
}
