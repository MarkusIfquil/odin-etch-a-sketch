function createSquares(numOfSquresOnOneSide) {
    container.innerHTML = '';
    for (let index = 0; index < numOfSquresOnOneSide*numOfSquresOnOneSide; index++) {
        let squareDiv = document.createElement('div');

        let proportion = 100 / numOfSquresOnOneSide;
        
        squareDiv.style.width = `${proportion}%`; 
        squareDiv.style.height = `${proportion}%`;

        squareDiv.addEventListener('mouseover',
            () => squareDiv.style.backgroundColor = 'black'
        );

        container.appendChild(squareDiv);
    }
}

let container = document.querySelector('.container');

let makeSquaresButton = document.querySelector('button');
let input = document.querySelector('input');

makeSquaresButton.addEventListener('click',
    () => createSquares(+input.value)
);

