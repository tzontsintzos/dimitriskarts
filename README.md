# Kartsagkoulis Photography Portfolio

A minimal portfolio website for Dimitris Kartsagkoulis, a photographer and visual artist based in Athens, Greece.

## Context

This website showcases the photography work of Dimitris Kartsagkoulis across multiple categories including:
- **Fashion** - Editorial and fashion photography projects (Andrew, Sony)
- **Commercial** - Commercial photography work (TUSSO, Sprayground)
- **Interior** - Interior architecture photography
- **BTS (Behind The Scenes)** - YAMA and Boukala projects
- **Art Collections** - Intimate, Attached Body, Flora Scarf Collection, Analogue Diary
- **About** - Biography and contact information

The design philosophy emphasizes minimalism with a clean, modern aesthetic featuring a video landing page and intuitive navigation.

## Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Flexbox and CSS Grid
- **JavaScript (ES6+)** - Modern JavaScript features
- **Vue.js 3** - Reactive UI framework (loaded via CDN)

### Fonts
- **Mistral** - Logo and brand typography (cursive)
- **Caveat** - Navigation and interactive elements
- **Dubai** - Body text and descriptions

### Deployment
- **Git/GitHub** - Version control
- **Cloudflare Pages** - Hosting and deployment

## Design Units

### Typography
- **pt (points)** - Used for typography to ensure consistent sizing across devices
  - Logo: 67.5pt
  - Navigation menu: 30pt
  - Photographer name: 75pt
  - Body text (About): 13pt
  - Category links: 36pt

### Spacing
- **px (pixels)** - Used for spacing, padding, and layout
- **rem** - Used for responsive spacing in galleries and sections
- **vw/vh** - Viewport units for full-width/height elements

### Responsive Breakpoints
- **Desktop**: Default (>768px)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## Project Structure

```
dimitriskarts/
├── index.html                    # Main HTML file
├── style.css                     # Main stylesheet
├── script.js                     # Vue.js application logic
├── favicon.png                   # Website favicon
├── logo.png                      # Logo image
├── website_colored_compressed.mp4 # Landing page video
└── WEBSITE CONTENT/
    └── PHOTOS/
        ├── ABOUT/                # About section photos
        ├── CIRCLES/              # Category icons and buttons
        └── PROJECTS/             # Project galleries
            ├── commercial/
            ├── fashion/
            ├── interior/
            ├── bts/
            ├── intimate/
            ├── attached/
            ├── flora/
            └── analogue/
```

## Key Features

- **Minimal Landing Page** - Full-screen video background with logo and cube toggle
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Vue.js Reactivity** - Dynamic section navigation without page reloads
- **Gallery Layouts** - Custom grid layouts for different project types
- **Hash-based Routing** - URL hash navigation for bookmarkable sections
- **Smooth Transitions** - Subtle hover effects and animations

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

To run locally:
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - vanilla HTML/CSS/JS with Vue.js via CDN

## Contact

- **Email**: dimitris.kartsagoulis@yahoo.com
- **Instagram**: [@dimitris.karts](https://www.instagram.com/dimitris.karts/)

---

**Built with attention to detail and minimal aesthetics**
