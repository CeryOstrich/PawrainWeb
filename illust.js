const gallery = document.querySelector('.gallery');

// Clone images to create seamless scrolling
function cloneImagesForSeamless() {
    const images = [...gallery.children];
    const galleryWidth = gallery.scrollWidth;

    // Clone images until gallery width is doubled
    while (gallery.scrollWidth < galleryWidth * 2) {
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            gallery.appendChild(clone);
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

