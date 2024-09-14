console.log('slide immagini');
let slideIndex = 0;
showSlides();


function showSlides() {
    // console.log('Dottore buonasera, non la tocco piu promesso altrimenti mi smette di funzionare');
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    console.log('cambiata');
    setTimeout(showSlides, 5000); // t x1000 in s
}