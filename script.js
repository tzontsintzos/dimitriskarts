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
        }
    },
    mounted() {
        this.initFromHash();

        window.addEventListener('hashchange', () => {
            this.initFromHash();
        });
    }
}).mount('#app');