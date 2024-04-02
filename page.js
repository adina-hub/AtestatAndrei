window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY;

    var navbar = document.querySelector('#navbarContainer')
    if (scrollPos >= 100) {
        navbar.style.backgroundColor = 'rgba( 0, 0, 0, 0.7)';
    } else if (scrollPos < 100) {
        navbar.style.backgroundColor = 'rgba( 0, 0, 0, 0)';
    }

})


// CLICK ON IMAGE - GALLERY PAGE
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the photo elements
    const photos = document.querySelectorAll('.photo');

    // Get reference to the modal container
    const modalContainer = document.getElementById('modalContainer');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            // Extract the URL of the background image associated with the clicked photo
            const imageUrl = photo.getAttribute('data-image-url');

            // Set the background image of the modal container
            modalContainer.style.backgroundImage = `url('${imageUrl}')`;

            openModal()
        });
    });
})

// Close the modal when the close button is clicked
document.querySelector('.close-button').addEventListener('click', closeModal);


// Open the modal and overlay
function openModal() {
    document.querySelector('.modal-overlay').style.display = 'block';
    document.querySelector('.modal-container').style.display = 'block';
    disableScroll();
}

// Close the modal and overlay
function closeModal() {
    document.querySelector('.modal-overlay').style.display = 'none';
    document.querySelector('.modal-container').style.display = 'none';
    enableScroll();
}

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = '';
}