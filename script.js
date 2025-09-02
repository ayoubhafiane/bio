// Function to open the lightbox and display the clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Function to download the .vcf file
function downloadVCF() {
    const link = document.createElement('a');
    link.href = 'contact.vcf'; // Path to the .vcf file
    link.download = 'contact.vcf'; // File name for download
    link.click();
}

// Welcome Overlay logic
function closeWelcomeOverlay() {
    document.getElementById('welcome-overlay').style.display = 'none';
}
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome-overlay').style.display = 'flex';
});