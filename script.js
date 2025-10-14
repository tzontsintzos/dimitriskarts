const { createApp } = Vue;

createApp({
    data() {
        return {
            activeSection: 'home',
            menuOpen: false,
            portfolioOpen: false,
            lightboxImage: null,
            aboutText: 'Photographer based in Greece, specializing in portrait, landscape, and architectural photography. With over 10 years of experience, I capture moments that tell stories and evoke emotions. My work focuses on natural light and authentic compositions.',
            portfolioItems: [
                {
                    id: 1,
                    title: 'Portrait Series',
                    image: 'https://images.unsplash.com/photo-1494790108755-2616c27886d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 2,
                    title: 'Urban Landscapes',
                    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 3,
                    title: 'Architecture',
                    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 4,
                    title: 'Nature Photography',
                    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 5,
                    title: 'Street Photography',
                    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                },
                {
                    id: 6,
                    title: 'Wedding Photography',
                    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }
            ]
        }
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
            this.menuOpen = false;

            this.$nextTick(() => {
                document.getElementById(section).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        openLightbox(item) {
            this.lightboxImage = item;
        },
        closeLightbox() {
            this.lightboxImage = null;
        },
        openPortfolio() {
            this.portfolioOpen = true;
        },
        closePortfolio() {
            this.portfolioOpen = false;
            this.activeSection = 'home';
        },
        handleScroll() {
            const sections = ['home', 'work', 'about'];
            let currentSection = 'home';

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            this.activeSection = currentSection;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.lightboxImage) {
                this.closeLightbox();
            }
        });
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}).mount('#app');