document.addEventListener('DOMContentLoaded', function() {
    // Menu móvel
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de fade-in para elementos
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Verificar elementos ao carregar a página
    checkFade();

    // Verificar elementos ao rolar a página
    window.addEventListener('scroll', checkFade);

    // Adicionar efeitos de hover nos botões de contato
    const contactButtons = document.querySelectorAll('.cta-button');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efeito de click nos links de contato
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Pequena animação de feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Funcionalidade para o botão WhatsApp flutuante
    const whatsappFloat = document.querySelector('.whatsapp-float');

    if (whatsappFloat) {
        // Efeito de click no botão WhatsApp flutuante
        whatsappFloat.addEventListener('click', function(e) {
            // Pequena animação de feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });

        // Efeito de hover adicional
        whatsappFloat.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });

        whatsappFloat.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });

        // Mostrar/esconder o botão baseado no scroll (opcional)
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Mostrar o botão apenas após rolar um pouco
            if (scrollTop > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.visibility = 'visible';
            } else {
                whatsappFloat.style.opacity = '1'; // Manter sempre visível
                whatsappFloat.style.visibility = 'visible';
            }

            lastScrollTop = scrollTop;
        });
    }

    // Melhorar a responsividade dos itens de contato
    function adjustContactItems() {
        const contactItems = document.querySelectorAll('.contact-item');
        const windowWidth = window.innerWidth;

        contactItems.forEach(item => {
            if (windowWidth <= 576) {
                // Em telas muito pequenas, centralizar tudo
                item.style.textAlign = 'center';
                item.style.flexDirection = 'column';
                item.style.alignItems = 'center';
            } else {
                // Em telas maiores, manter layout normal
                item.style.textAlign = 'left';
                item.style.flexDirection = 'row';
                item.style.alignItems = 'flex-start';
            }
        });
    }

    // Chamar a função no carregamento e redimensionamento
    adjustContactItems();
    window.addEventListener('resize', adjustContactItems);
});