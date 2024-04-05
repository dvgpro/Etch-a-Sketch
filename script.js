const modal = document.querySelector('.settings-modal');
const closeButton = document.querySelector('.close-modal');
const openButton = document.querySelector('.setting-btn');
const reloadButton = document.querySelector('.reset-btn');

const grid = document.querySelector('.grid-container');



openButton.addEventListener('click', ()=>
{
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () =>
{
    modal.style.display = 'none';
});

reloadButton.addEventListener('click', () =>
{
    location.reload();
});

let boxesRow = 16;
let containerSize = 720;

let boxColor = 'black';

function buildGrid()
{
    for(let i=0; i<(boxesRow**2);i++)
    {
        let box = document.createElement('div');
        box.classList.add('squares');
        box.setAttribute(
            'style', 
            `width: ${containerSize/boxesRow}px;
            height: ${containerSize/boxesRow}px;`
        );

        box.addEventListener('mouseenter', () =>
        {
            box.style.backgroundColor = boxColor;
        });

        grid.appendChild(box);
    };
};

buildGrid();