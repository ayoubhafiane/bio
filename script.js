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
function showStalker() {
    // Hide welcome buttons
    var buttons = document.querySelector('.welcome-buttons');
    if (buttons) buttons.style.display = 'none';
    // Show stalker message with animation
    var msg = document.getElementById('stalker-message');
    msg.style.display = 'block';
    msg.classList.remove('stalker-message'); // restart animation
    void msg.offsetWidth; // trigger reflow for replay
    msg.classList.add('stalker-message');
    // After 2 seconds, hide overlay (let them in anyway)
    setTimeout(closeWelcomeOverlay, 2000);
}

// Show overlay on load
window.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('welcome-overlay');
    if (overlay) overlay.style.display = 'flex';
});