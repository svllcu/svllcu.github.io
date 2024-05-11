let body = document.querySelector('body');
let profPic = document.querySelector('.profpic');

profPic.addEventListener('click', () => {
    body.classList.toggle('paginaLogin')
    console.log('aperto-popUp-login')
});
// finisci che quando clicchi opacità di piu e display della pagina di login aggiungendo una classe