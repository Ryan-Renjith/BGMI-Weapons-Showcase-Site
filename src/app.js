let navbar = document.getElementById('navbar');

document.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        navbar.classList.add('transition');
        navbar.classList.add('ease-out');
        navbar.classList.add('bg-black');
        navbar.classList.add('duration-700');
    } else {
        navbar.classList.remove('bg-black');
    }
});