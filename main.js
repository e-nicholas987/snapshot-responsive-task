let isOpen = false

function toggleDropDown() {
    isOpen=!isOpen
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (isOpen) {
        navLinks.style.display = 'flex';
        navLinks.classList.add('drop-down');
        hamburger.className = 'hamburger fas fa-times';
        document.body.style.overflow = 'hidden';

    } else {
        navLinks.style.display = 'none';
        navLinks.classList.remove('drop-down');
        hamburger.className = 'hamburger fas fa-bars';
        document.body.style.overflow = 'auto';
    }

}
