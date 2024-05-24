function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('0').addEventListener('click', function() {
    scrollToSection('home');
});

document.getElementById('1').addEventListener('click', function() {
    scrollToSection('page1');
});

document.getElementById('2').addEventListener('click', function() {
    scrollToSection('page2');
});

document.getElementById('3').addEventListener('click', function() {
    scrollToSection('page3');
});

document.getElementById('4').addEventListener('click', function() {
    scrollToSection('page4')
});

document.getElementById('5').addEventListener('click', function() {
    scrollToSection('page5');
});

document.getElementById('6').addEventListener('click', function() {
    scrollToSection('aboutus');
});