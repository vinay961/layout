// script.js
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const collapsibleHeaders = document.querySelectorAll(".certification-modules h3");

    collapsibleHeaders.forEach(header => {
        header.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const moduleTitles = document.querySelectorAll('.module-title');

    moduleTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const isActive = content.classList.contains('show');
            
            // Hide all module contents
            document.querySelectorAll('.module-content').forEach(content => {
                content.classList.remove('show');
            });

            // Toggle the current module content
            if (!isActive) {
                content.classList.add('show');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.image-slider');
    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        slider.scrollBy({ left: -slider.clientWidth / 4, behavior: 'smooth' });
        scrollAmount -= slider.clientWidth / 4;
    });

    nextButton.addEventListener('click', () => {
        slider.scrollBy({ left: slider.clientWidth / 4, behavior: 'smooth' });
        scrollAmount += slider.clientWidth / 4;
    });
});

window.addEventListener('scroll', function() {
    var subHeading = document.querySelector('.subHeading');
    var subHeadingOffsetTop = subHeading.offsetTop;

    if (window.pageYOffset > subHeadingOffsetTop) {
        subHeading.classList.add('sticky');
    } else {
        subHeading.classList.remove('sticky');
    }
});