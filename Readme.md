### Summary of Services Section Added
📄 HTML Changes ( index.html )
### New Services Section
Added between hero and gallery sections with:

### BARBERSHOP Block:

### Service	Price
Schneiden	€18
Null Schnitt, Taper fade, low fade	€21
Null Schnitt mit Waschen, Stylen	€24
Bart rasieren	€16
Bart modernen	€6
Bart kürzen	€12
Bart Färben	€16
FRISEURSALON Block:

### Service	Kurz	Lang
Schneiden	€28	€28
Waschen, Schneiden	€38	€38
Waschen, Schneiden, Föhnen	€40	€50
Waschen, Föhnen	€22	€32
Strähnen Oberkopf	ab €70	
Strähnen komplett	ab €80	
Färben	ab €50	
Navigation Updated
Added Preise link in desktop nav
Added Preise link in mobile menu

🎨 CSS Additions ( styles.css )
### Feature	Description
Glassmorphism cards	Blurred, semi-transparent service blocks
Animated dotted lines	Lines flow continuously between service name and price
Hover shimmer effect	A light sweep animation on row hover
Price pop animation	Prices scale up and change color on hover
Button fill animation	"MEHR" button fills with color from center on hover
Scroll reveal animations	Elements fade/slide in when scrolled into view
Responsive design	Adapts layout for tablet and mobile

⚡ JavaScript Additions ( script.js )
###Feature	Description
Intersection Observer	Triggers CSS animations when elements enter viewport
Staggered delays	Each service row animates sequentially
DE/EN translations	All 19 new service text keys translated

🎬 Animation Types Used
fade-up — Elements slide up while fading in
slide-right — Elements slide in from the left
lineFlow — Continuous dotted line animation (20s loop)
Hover transforms — Scale, translate, and color transitions
about the website - what all are available


Thought for 1s

FortyOne Hairstyling Website Overview
🌐 Pages
Page	File	Description
Home	
index.html
Main landing page with all sections
Impressum	impressum.html	Legal notice (German law requirement)
Datenschutz	datenschutz.html	Privacy policy page

🎯 Main Sections (index.html)
1. Navigation Bar
Fixed header that changes on scroll
Logo linking to home
Desktop nav links: Startseite, Preise, Galerie, Kontakt
Language toggle (DE/EN)
Mobile hamburger menu

2. Hero Section
Full-screen image slideshow (6 images: 6.jpg - 11.jpg)
Auto-advances every 5 seconds
Clickable slide indicators
Animated headline with CTA button

3. Services/Prices Section (NEW)
Barbershop pricing table (7 services)
Friseursalon pricing table (7 services with Kurz/Lang pricing)
Animated dotted lines and scroll animations

4. Gallery Section
6-image grid (12.jpg - 17.jpg)
Hover effects with zoom
Lightbox for full-screen viewing

5. Footer
Logo and description
Social media icons (Instagram, Facebook, TikTok, WhatsApp, YouTube)
Contact info (address, phone)
Links to Impressum & Datenschutz

✨ Features
Feature	Status
🌍 Multi-language (DE/EN)	✅
📱 Responsive design	✅
🖼️ Image lightbox	✅
🎠 Hero slideshow	✅
🎬 Scroll animations	✅
💾 Language persistence (localStorage)	✅
🔗 Smooth scroll navigation	✅
📁 File Structure
FortyOne/
├── index.html          # Main page
├── impressum.html      # Legal notice
├── datenschutz.html    # Privacy policy
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── images/
    ├── Logo.png        # Site logo
    ├── 6.jpg - 11.jpg  # Hero slideshow images
    └── 12.jpg - 17.jpg # Gallery images
