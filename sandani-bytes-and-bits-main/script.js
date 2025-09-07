// Basic JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const text = this.textContent.trim();
            
            if (text === 'View Projects') {
                e.preventDefault();
                document.querySelector('.projects').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (text === 'Contact Me') {
                e.preventDefault();
                // You can add contact functionality here
                alert('Contact functionality can be added here (email, LinkedIn, etc.)');
            } else if (text === 'View All Projects on GitHub') {
                e.preventDefault();
                // Replace with your actual GitHub URL
                window.open('https://github.com/yourusername', '_blank');
            } else if (text === 'View Details') {
                e.preventDefault();
                // Add individual project links here
                alert('Individual project links can be added here');
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add typing effect to hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});