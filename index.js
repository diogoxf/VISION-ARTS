document.addEventListener("DOMContentLoaded", function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll('#slideshow img');
    
    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    

    nextSlide(); 
    setInterval(nextSlide, 3000);
});

 
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        var servicosSection = document.getElementById('servicos');

        if (isElementInViewport(servicosSection)) {
            servicosSection.classList.add('show');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    