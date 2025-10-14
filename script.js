const { createApp } = Vue;

createApp({
    data() {
        return {
            activeSection: 'home',
            workMenuOpen: false,
            portfolioOpen: false
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
            console.log('Selected category:', category);
        },
        goBack() {
            this.activeSection = 'home';
            window.location.hash = 'home';
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
        }
    },
    mounted() {
        this.initFromHash();

        window.addEventListener('hashchange', () => {
            this.initFromHash();
        });
    }
}).mount('#app');