function getRandomColor() {
    let r = Math.round(Math.random() * 1000) % 256;
    let g = Math.round(Math.random() * 1000) % 256;
    let b = Math.round(Math.random() * 1000) % 256;
    return `rgb(${r},${g},${b})`;
}

function createSquaresColor(numOfSquresOnOneSide) {
    container.innerHTML = '';
    for (let index = 0; index < numOfSquresOnOneSide*numOfSquresOnOneSide; index++) {
        let squareDiv = document.createElement('div');

        let proportion = 100 / numOfSquresOnOneSide;
        
        squareDiv.style.width = `${proportion}%`; 
        squareDiv.style.height = `${proportion}%`;
        squareDiv.style.backgroundColor = 'white';

        squareDiv.addEventListener('mouseover',
            () => squareDiv.style.backgroundColor = getRandomColor()
        );

        container.appendChild(squareDiv);
    }
}

function createSquaresGreyscale(numOfSquresOnOneSide) {
    container.innerHTML = '';
    for (let index = 0; index < numOfSquresOnOneSide*numOfSquresOnOneSide; index++) {
        let squareDiv = document.createElement('div');

        let proportion = 100 / numOfSquresOnOneSide;
        
        squareDiv.style.width = `${proportion}%`; 
        squareDiv.style.height = `${proportion}%`;
        squareDiv.style.backgroundColor = 'white';
        squareDiv.style.opacity = '1';
        squareDiv.addEventListener('mouseover',
            () => {
                let currentOpacity = +squareDiv.style.opacity;
                if(currentOpacity === 0.0) {
                    return;
                }
                squareDiv.style.opacity = (currentOpacity - 0.1).toString()
            }
        );

        container.appendChild(squareDiv);
    }
}

let container = document.querySelector('.container');

let makeSquaresButton = document.querySelector('.make-button');
let inputBox = document.querySelector('input');
let input = 2;
inputBox.addEventListener('input', 
    () => {
        if(+inputBox.value > 100) {
            inputBox.value = '100';
        }
        input = +inputBox.value;
    }
)

let colorButton = document.querySelector('.color-button');
let greyscaleButton = document.querySelector('.greyscale-button');

let currentGameMode = 'greyscale';

colorButton.addEventListener('click',
    () => {
        currentGameMode = 'color';
        createSquaresColor(input);
    }
);

greyscaleButton.addEventListener('click',
    () => {
        currentGameMode = 'greyscale';
        createSquaresGreyscale(input);
    }
);

makeSquaresButton.addEventListener('click',
    () => {
        switch (currentGameMode) {
            case 'color': {
                createSquaresColor(input);
                break;
            }
            case 'greyscale': {
                createSquaresGreyscale(input);
                break;
            }
        }
    }
);

createSquaresGreyscale(64);
