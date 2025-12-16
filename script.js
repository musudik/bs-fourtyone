// FortyOne Hairstyling - Main JavaScript

// Translations
const translations = {
    de: {
        // Navigation
        'nav.home': 'Startseite',
        'nav.gallery': 'Galerie',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.tagline': 'Willkommen bei',
        'hero.description': 'Erleben Sie erstklassiges Hairstyling in einer modernen Atmosphäre. Unser Team von erfahrenen Stylisten sorgt dafür, dass Sie immer perfekt aussehen.',
        'hero.cta': 'Termin vereinbaren',

        // Gallery
        'gallery.tagline': 'Unsere Arbeit',
        'gallery.title': 'Galerie',
        'gallery.description': 'Entdecken Sie unsere neuesten Arbeiten und lassen Sie sich inspirieren.',

        // Footer
        'footer.description': 'Ihr professioneller Friseur für moderne Haarschnitte und erstklassiges Styling.',
        'footer.followUs': 'Folgen Sie uns',
        'footer.contact': 'Kontakt',
        'footer.address': 'Pasinger Bahnhofspl. 2, 81241 München',
        'footer.rights': 'Alle Rechte vorbehalten.',
        'footer.impressum': 'Impressum',
        'footer.datenschutz': 'Datenschutz',

        // Impressum Page
        'page.impressum.title': 'Impressum',
        'page.impressum.info': 'Angaben gemäß § 5 TMG',
        'page.impressum.company': 'FortyOne Hairstyling',
        'page.impressum.represented': 'Vertreten durch:',
        'page.impressum.contact': 'Kontakt',
        'page.impressum.phone': 'Telefon:',
        'page.impressum.email': 'E-Mail:',
        'page.impressum.disclaimer': 'Haftungsausschluss',
        'page.impressum.liability': 'Haftung für Inhalte',
        'page.impressum.liabilityText': 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        'page.impressum.links': 'Haftung für Links',
        'page.impressum.linksText': 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        'page.impressum.copyright': 'Urheberrecht',
        'page.impressum.copyrightText': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        'page.back': '← Zurück zur Startseite',

        // Datenschutz Page
        'page.datenschutz.title': 'Datenschutzerklärung',
        'page.datenschutz.overview': 'Datenschutz auf einen Blick',
        'page.datenschutz.general': 'Allgemeine Hinweise',
        'page.datenschutz.generalText': 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.',
        'page.datenschutz.collection': 'Datenerfassung auf dieser Website',
        'page.datenschutz.responsible': 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        'page.datenschutz.responsibleText': 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.',
        'page.datenschutz.how': 'Wie erfassen wir Ihre Daten?',
        'page.datenschutz.howText': 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).',
        'page.datenschutz.purpose': 'Wofür nutzen wir Ihre Daten?',
        'page.datenschutz.purposeText': 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
        'page.datenschutz.rights': 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        'page.datenschutz.rightsText': 'Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',
        'page.datenschutz.hosting': 'Hosting',
        'page.datenschutz.hostingText': 'Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.',
        'page.datenschutz.cookies': 'Cookies',
        'page.datenschutz.cookiesText': 'Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',

        // Hero
        'hero.tagline': 'Welcome to',
        'hero.description': 'Experience first-class hairstyling in a modern atmosphere. Our team of experienced stylists ensures you always look perfect.',
        'hero.cta': 'Book Appointment',

        // Gallery
        'gallery.tagline': 'Our Work',
        'gallery.title': 'Gallery',
        'gallery.description': 'Discover our latest work and get inspired.',

        // Footer
        'footer.description': 'Your professional hairdresser for modern haircuts and first-class styling.',
        'footer.followUs': 'Follow Us',
        'footer.contact': 'Contact',
        'footer.address': 'Pasinger Bahnhofspl. 2, 81241 München',
        'footer.rights': 'All rights reserved.',
        'footer.impressum': 'Legal Notice',
        'footer.datenschutz': 'Privacy Policy',

        // Impressum Page
        'page.impressum.title': 'Legal Notice',
        'page.impressum.info': 'Information according to § 5 TMG',
        'page.impressum.company': 'FortyOne Hairstyling',
        'page.impressum.represented': 'Represented by:',
        'page.impressum.contact': 'Contact',
        'page.impressum.phone': 'Phone:',
        'page.impressum.email': 'Email:',
        'page.impressum.disclaimer': 'Disclaimer',
        'page.impressum.liability': 'Liability for Content',
        'page.impressum.liabilityText': 'As a service provider, we are responsible for our own content on these pages according to § 7 para.1 TMG under the general laws. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        'page.impressum.links': 'Liability for Links',
        'page.impressum.linksText': 'Our offer contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
        'page.impressum.copyright': 'Copyright',
        'page.impressum.copyrightText': 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.',
        'page.back': '← Back to Home',

        // Datenschutz Page
        'page.datenschutz.title': 'Privacy Policy',
        'page.datenschutz.overview': 'Privacy at a Glance',
        'page.datenschutz.general': 'General Information',
        'page.datenschutz.generalText': 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified.',
        'page.datenschutz.collection': 'Data Collection on This Website',
        'page.datenschutz.responsible': 'Who is responsible for data collection on this website?',
        'page.datenschutz.responsibleText': 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.',
        'page.datenschutz.how': 'How do we collect your data?',
        'page.datenschutz.howText': 'Your data is collected in part by you providing it to us. This could be data you enter in a contact form, for example. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page access).',
        'page.datenschutz.purpose': 'What do we use your data for?',
        'page.datenschutz.purposeText': 'Part of the data is collected to ensure the website is provided error-free. Other data may be used to analyze your user behavior.',
        'page.datenschutz.rights': 'What rights do you have regarding your data?',
        'page.datenschutz.rightsText': 'You have the right to receive free information about the origin, recipient, and purpose of your stored personal data at any time. You also have the right to request the correction or deletion of this data. You can contact us at any time regarding this and other questions about data protection.',
        'page.datenschutz.hosting': 'Hosting',
        'page.datenschutz.hostingText': 'We host the content of our website with an external service provider. The personal data collected on this website is stored on the host\'s servers.',
        'page.datenschutz.cookies': 'Cookies',
        'page.datenschutz.cookiesText': 'Our website uses so-called "cookies". Cookies are small text files and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device.'
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'de';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initSlideshow();
    initNavbar();
    initMobileMenu();
    initLightbox();
    initSmoothScroll();
});

// Language System
function initLanguage() {
    // Set initial language
    setLanguage(currentLang);

    // Add event listeners to language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update active button
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Translate all elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Slideshow
let currentSlide = 0;
let slideInterval;

function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');

    if (slides.length === 0) return;

    // Start auto slideshow
    startSlideshow();

    // Add indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetSlideshow();
        });
    });
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlideshow();
    }, 5000);
}

function resetSlideshow() {
    clearInterval(slideInterval);
    startSlideshow();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideshow();
}

function updateSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Navbar Scroll Effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

// Lightbox
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (!lightbox) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
