document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  
    // Variáveis para navegação
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
  
    // Controle de scroll para o header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Toggle do menu mobile
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      toggleMenuIcon();
    });
  
    // Fechar menu ao clicar em links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        toggleMenuIcon(false);
      });
    });
  
    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      const isNavClick = nav.contains(e.target);
      const isToggleClick = menuToggle.contains(e.target);
      
      if (!isNavClick && !isToggleClick && nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggleMenuIcon(false);
      }
    });
  
    // Alternar ícone do menu
    function toggleMenuIcon(isActive) {
      const spans = menuToggle.querySelectorAll('span');
      
      if (isActive === undefined) {
        isActive = !nav.classList.contains('active');
      }
      
      if (isActive) {
        // Transformar para X
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        // Reverter para menu hamburger
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    }
  
    // Scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = header.offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Revelar elementos quando visíveis
    const revealElements = document.querySelectorAll('.card, section h2, section p');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    revealElements.forEach(el => {
      el.classList.add('reveal-element');
      revealObserver.observe(el);
    });
  });