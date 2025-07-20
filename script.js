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
let input = document.querySelector('input');

let colorButton = document.querySelector('.color-button');
let greyscaleButton = document.querySelector('.greyscale-button');

let currentGameMode = 'greyscale';

colorButton.addEventListener('click',
    () => {
        currentGameMode = 'color';
        createSquaresColor(+input.value);
    }
);

greyscaleButton.addEventListener('click',
    () => {
        currentGameMode = 'greyscale';
        createSquaresGreyscale(+input.value);
    }
);

makeSquaresButton.addEventListener('click',
    () => {
        switch (currentGameMode) {
            case 'color': {
                createSquaresColor(+input.value);
                break;
            }
            case 'greyscale': {
                createSquaresGreyscale(+input.value);
                break;
            }
        }
    }
);

createSquaresGreyscale(64);
