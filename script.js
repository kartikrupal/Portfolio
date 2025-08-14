        document.addEventListener('DOMContentLoaded', function() {

            // --- NAVBAR VISIBILITY ON SCROLL ---
            const mainNav = document.getElementById('main-nav');
            const heroSection = document.getElementById('hero');

            window.addEventListener('scroll', () => {
                // Show nav when user scrolls past the hero section
                if (window.scrollY > heroSection.offsetHeight - 50) {
                    mainNav.classList.add('visible');
                } else {
                    mainNav.classList.remove('visible');
                }
            });

            // --- SMOOTH SCROLLING FOR NAV LINKS ---
            // This now applies to the new nav bar links
            document.querySelectorAll('.nav-link').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            // Also for the CTA button
            document.querySelector('.cta-btn').addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });


            // --- INTERSECTION OBSERVER FOR SECTION FADE-IN ANIMATIONS ---
            const sections = document.querySelectorAll('section');
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });

            // --- TYPING ANIMATION ---
            const typedTextSpan = document.querySelector(".typed-text");
            const cursorSpan = document.querySelector(".typed-cursor");
            const textArray = ["AI & ML Engineer", "Data Scientist", "Full-Stack Developer", "Problem Solver"];
            const typingDelay = 100;
            const erasingDelay = 50;
            const newTextDelay = 2000;
            let textArrayIndex = 0;
            let charIndex = 0;

            function type() {
                if (charIndex < textArray[textArrayIndex].length) {
                    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(type, typingDelay);
                } else {
                    cursorSpan.classList.remove("typing");
                    setTimeout(erase, newTextDelay);
                }
            }

            function erase() {
                if (charIndex > 0) {
                    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(erase, erasingDelay);
                } else {
                    cursorSpan.classList.remove("typing");
                    textArrayIndex++;
                    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                    setTimeout(type, typingDelay + 1100);
                }
            }
            
            if (typedTextSpan && cursorSpan) {
                setTimeout(type, newTextDelay + 250);
            }

        });