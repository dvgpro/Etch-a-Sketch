const modal = document.querySelector('.settings-modal');
const closeButton = document.querySelector('.close-modal');
const openButton = document.querySelector('.setting-btn');
const reloadButton = document.querySelector('.reset-btn');

openButton.addEventListener('click', ()=>
{
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () =>
{
    modal.style.display = 'none';
});