$(document).ready(function() {
    const $carousel = $(".carousel");
    const $slides = $(".carousel-slide");
    let currentIndex = 0;
    
    function showSlide(index) {
        if (index < 0) {
            currentIndex = $slides.length - 1;
        } else if (index >= $slides.length) {
            currentIndex = 0;
        }
        $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
    }
    
    setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000);
});

links = Array.from(document.querySelectorAll('a'));

links.forEach(element => {
    console.log(element.href);
    console.log(window.location.pathname);
    if(element.href.includes(window.location.pathname)){
        element.classList.add('active');
    }
});
