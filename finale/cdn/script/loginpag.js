let body = document.querySelector('body');
let profPic = document.querySelector('.profpic');
let closeL = document.querySelector('.closel');

profPic.addEventListener('click', () => {
    body.classList.add('paginaLogin')
    console.log('aperto-popUp-login')
});
closeL.addEventListener('click', () => {
    body.classList.remove('paginaLogin')
    console.log('chiuso-popUp-login')
});
// finisci che quando clicchi opacità di piu e display della pagina di login aggiungendo una classe