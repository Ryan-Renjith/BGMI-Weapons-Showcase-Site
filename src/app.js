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

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("hidden");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#menu')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function showInfo(sectionId) {
    var section = document.getElementById(sectionId);

    if(section) {
        section.classList.toggle('hidden');
    }
}
