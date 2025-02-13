body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

header {
    text-align: center;
    padding: 20px;
    background-color: #4CAF50;
    color: white;
}

header h1 {
    margin: 0;
}

section {
    margin: 20px;
    text-align: center;
}

#canvas {
    display: grid;
    grid-gap: 1px;
    margin: 20px auto;
    background-color: #ccc;
}

#canvas div {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    cursor: pointer;
}

textarea {
    width: 300px;
    height: 150px;
    margin: 10px 0;
}

button {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
}

button:disabled {
    background-color: #ccc;
}

input[type="file"] {
    display: none;
}
