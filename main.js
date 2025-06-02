// Animações de Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observar elementos com a classe animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    el.classList.remove('animate-fade-in');
    observer.observe(el);
});

// Efeito de digitação
const typed = new Typed('#typed', {
    strings: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Design Responsivo', 'IA'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: false
});

// Animação de float na foto
const floatAnimation = () => {
    const element = document.querySelector('.animate-float');
    if (element) {
        element.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
            setTimeout(floatAnimation, 2000);
        }, 1000);
    }
};

// Iniciar animação de float
floatAnimation();

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de hover nos cards de projetos
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    });
});

// Animação de carregamento
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Menu Mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Animação de entrada para cards de projeto
document.querySelectorAll('.project-card').forEach((card, index) => {
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 200);

    // Redirecionamento automático para o El Taco
    if (card.querySelector('h3').textContent === 'El Taco') {
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A') {
                window.location.href = 'http://eltaco.infinityfreeapp.com/';
            }
        });
    }
});
