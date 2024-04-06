const reloadButton = document.querySelector('.reset-btn');
const grid = document.querySelector('.grid-container');
const clearGrid = document.querySelector('.clear-btn');

const modal = document.querySelector('.settings-modal');
const modalShow = document.querySelector('.setting-btn');
const modalHide = document.querySelector('.closeModalBtn');

const rainbowColors = document.querySelector('.rainbowBtn');
const applyColor = document.querySelector('.applyColorBtn');
const givenColor = document.querySelector('.inputColorBox');
const applyRow = document.querySelector('.applySizeChange');
const givenRowSize = document.querySelector('.inputRowBox');

modalShow.addEventListener('click', () =>
{
    modal.style.display = 'block';
});

modalHide.addEventListener('click', () => 
{
    modal.style.display = 'none';
});

reloadButton.addEventListener('click', () =>
{
    location.reload();
});

let boxesPerRow = 16;
let containerSize = 720;
let boxColor = 'black';
let clicked = 'false';

function buildGrid(row, colors, clicked)
{
    for(let i=0; i<(row**2);i++)
    {
        let box = document.createElement('div');
        box.classList.add('squares');
        box.setAttribute(
            'style', 
            `width: ${containerSize/row}px;
            height: ${containerSize/row}px;`
        );

        box.addEventListener('mouseenter', () =>
        {  

            if (box.style.backgroundColor == '')
            {
                if (clicked === 'true')
                {    
                    var letters = '0123456789ABCDEF';
                    colors = '#';

                    for (var x = 0; x < 6; x++) 
                    {
                        colors += letters[Math.floor(Math.random() * 16)];
                    };
                    box.style.backgroundColor = colors;
                }
                else if(clicked === 'false')
                {
                    box.style.backgroundColor = colors;
                };
            };

            if (box.style.opacity <= 1)
            {
                box.style.opacity = +box.style.opacity + 0.1;
            };
        });

        grid.appendChild(box);
    };
};

buildGrid(boxesPerRow, boxColor);

rainbowColors.addEventListener('click', () =>
{
    grid.innerHTML = '';
    clicked= 'true';
    buildGrid(boxesPerRow, boxColor, clicked);
});

clearGrid.addEventListener('click', () =>
{
    grid.innerHTML = '';
    buildGrid(boxesPerRow, boxColor, clicked);
});

applyColor.addEventListener('click', () =>
{
    grid.innerHTML = '';
    boxColor = givenColor.textContent;
    clicked = 'false';
    buildGrid(boxesPerRow, boxColor, clicked);
});

applyRow.addEventListener('click', () => 
{
    grid.innerHTML = '';
    boxesPerRow = parseInt(givenRowSize.textContent);
    buildGrid(boxesPerRow, boxColor, clicked);
});