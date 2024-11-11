// JavaScript for Image Gallery

// Array of image objects
const images = [
    {
        large: 'images/flowers-pink-large.jpg',
        small: 'images/flowers-pink-small.jpg',
        alt: 'Pink Flowers',
        caption: 'Beautiful pink flowers in bloom.'
    },
    {
        large: 'images/flowers-purple-large.jpg',
        small: 'images/flowers-purple-small.jpg',
        alt: 'Purple Flowers',
        caption: 'Vibrant purple flowers in the garden.'
    },
    {
        large: 'images/flowers-red-large.jpg',
        small: 'images/flowers-red-small.jpg',
        alt: 'Red Flowers',
        caption: 'Stunning red flowers in the field.'
    },
    {
        large: 'images/flowers-white-large.jpg',
        small: 'images/flowers-white-small.jpg',
        alt: 'White Flowers',
        caption: 'Delicate white flowers swaying in the breeze.'
    },
    {
        large: 'images/flowers-yellow-large.jpg',
        small: 'images/flowers-yellow-small.jpg',
        alt: 'Yellow Flowers',
        caption: 'Bright yellow flowers shining in the sun.'
    }
];

// Get references to the figure image and caption
const featuredImage = document.querySelector('#gallery figure img');
const figcaption = document.querySelector('#gallery figure figcaption');
const thumbnailList = document.querySelector('#gallery ul');

// Function to build the thumbnail list
function buildThumbnailList() {
    images.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.small;
        img.alt = image.alt;
        img.dataset.large = image.large; // Store the large image URL in a data attribute
        img.dataset.index = index; // Store the index for later use
        img.classList.add('thumbnail');

        // Add click event listener to each thumbnail
        img.addEventListener('click', function() {
            updateFeaturedImage(index);
        });

        li.appendChild(img);
        thumbnailList.appendChild(li);
    });
}

// Function to update the featured image and caption
function updateFeaturedImage(index) {
    const selectedImage = images[index];
    featuredImage.src = selectedImage.large;
    figcaption.textContent = selectedImage.caption;

    // Update thumbnail styles
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.style.filter = (i === index) ? 'none' : 'grayscale(100%)';
    });
}

// Initialize the gallery
buildThumbnailList();
updateFeaturedImage(0); // Set the first image as the default featured image