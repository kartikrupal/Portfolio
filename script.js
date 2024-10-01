// JavaScript to handle redirection for buttons
document.getElementById('linkedin-btn').onclick = function() {
    window.location.href = 'https://www.linkedin.com/in/kartikrupal';
}

document.getElementById('github-btn').onclick = function() {
    window.location.href = 'https://github.com/kartikrupal';
}

document.getElementById('contact-btn').onclick = function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('projects-btn').onclick = function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('skills-btn').onclick = function() {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('certifications-btn').onclick = function() {
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('Introduction-btn').onclick = function() {
    document.getElementById('Introduction').scrollIntoView({ behavior: 'smooth' });
}
