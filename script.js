const { createApp } = Vue;

createApp({
    data() {
        return {
            activeSection: 'home',
            workMenuOpen: false,
            portfolioOpen: false,
            lastScrollTop: 0,
            isScrollingDown: false
        }
    },
    methods: {
        setActiveSection(section) {
            this.activeSection = section;
            this.workMenuOpen = false;
            window.location.hash = section;
        },
        toggleWorkMenu() {
            this.workMenuOpen = !this.workMenuOpen;
        },
        selectCategory(category) {
            console.log('Selecting category:', category);
            this.activeSection = category;
            this.workMenuOpen = false;
            window.location.hash = category;
        },
        goBack() {
            // Define parent sections for navigation
            const projectCategories = ['interior', 'fashion-portraits', 'bts-stage', 'commercial'];
            const artCategories = ['intimate', 'attached-body', 'flora-scarf', 'analogue-diary'];

            // If in a project category, go back to projects
            if (projectCategories.includes(this.activeSection)) {
                this.activeSection = 'projects';
                window.location.hash = 'projects';
            }
            // If in an art category, go back to art
            else if (artCategories.includes(this.activeSection)) {
                this.activeSection = 'art';
                window.location.hash = 'art';
            }
            // Otherwise go back to home
            else {
                this.activeSection = 'home';
                window.location.hash = 'home';
            }
        },
        openPortfolio() {
            this.portfolioOpen = true;
            window.location.hash = 'home';
        },
        closePortfolio() {
            this.portfolioOpen = false;
            this.activeSection = 'home';
            window.location.hash = '';
        },
        initFromHash() {
            const hash = window.location.hash.substring(1);
            if (hash) {
                this.portfolioOpen = true;
                this.activeSection = hash || 'home';
            }
        },
        handleScroll() {
            // Only apply on mobile devices
            if (window.innerWidth > 768) {
                // Remove hide classes on desktop
                const header = document.querySelector('.main-header');
                if (header) header.classList.remove('hide-on-scroll');
                return;
            }

            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Only hide if scrolling down and past 100px
            if (currentScrollTop > this.lastScrollTop && currentScrollTop > 100) {
                // Scrolling down
                this.isScrollingDown = true;
                const header = document.querySelector('.main-header');
                if (header) header.classList.add('hide-on-scroll');
            } else {
                // Scrolling up
                this.isScrollingDown = false;
                const header = document.querySelector('.main-header');
                if (header) header.classList.remove('hide-on-scroll');
            }

            this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        }
    },
    mounted() {
        this.initFromHash();

        window.addEventListener('hashchange', () => {
            this.initFromHash();
        });

        // Add scroll listener for hide-on-scroll functionality
        window.addEventListener('scroll', this.handleScroll);

        // Also handle window resize
        window.addEventListener('resize', this.handleScroll);
    },
    beforeUnmount() {
        // Clean up event listeners
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }
}).mount('#app');