const pathname = window.location.pathname;
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    if (link.href.includes(pathname)) {
        // link.classList.add('active');
        link.parentElement.classList.add('active'); // this gets added to li ele
    }
});