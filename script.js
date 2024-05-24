function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('1').addEventListener('click', function() {
    scrollToSection('page1');
});

document.getElementById('2').addEventListener('click', function() {
    scrollToSection('page2');
});

document.getElementById('3').addEventListener('click', function() {
    scrollToSection('page3');
});