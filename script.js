    // Select menu button and navigation links
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Toggle class 'active' on the nav-links when menu button is clicked
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px"; // Sembunyikan navbar
    } else {
        navbar.style.top = "0"; // Tampilkan navbar
    }
    lastScrollTop = scrollTop;
});

    const portfolioGallery = document.querySelector('.portfolio-gallery');

// Clone images to create seamless scrolling
function cloneImagesForSeamless() {
    const images = [...portfolioGallery.children];
    const galleryWidth = portfolioGallery.scrollWidth;

    // Clone images until gallery width is doubled
    while (portfolioGallery.scrollWidth < galleryWidth * 2) {
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            portfolioGallery.appendChild(clone);
        });
    }
}

// Initialize cloning
cloneImagesForSeamless();

document.querySelectorAll('.static-gallery img').forEach(img => {
    // Tentukan tinggi acak antara 2 hingga 5 baris
    const rowSpan = Math.floor(Math.random() * 4) + 2; // Nilai antara 2-5
    img.style.setProperty('--row-span', rowSpan);
});

document.getElementById("whatsappButton").addEventListener("click", function() {
    let adminPhone = "6285927494311"; // Replace with your admin WhatsApp number (without + and spaces)
    let messageContent = encodeURIComponent("Hello, I would like to get in touch!");

    // Create WhatsApp URL
    let whatsappURL = `https://wa.me/${adminPhone}?text=${messageContent}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
});






