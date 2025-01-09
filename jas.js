let lastScrollTop = 0; // Tracks the previous scroll position
const header = document.querySelector('.navigation');;
const activationDistance = 150; // Minimum scroll distance to activate the effect
const scrollThreshold = 100; // Distance to scroll before reapplying the effect
let effectActive = false; // To determine if the effect is active
let lastThresholdCheck = 0; // Last scroll position where the threshold logic was applied

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    // Step 1: Activate the effect only after the activation distance is reached
    if (currentScroll > activationDistance) {
        effectActive = true;
    } else {
        effectActive = false;
        header.classList.remove('hidden'); // Show header below activation distance
    }

    // Step 2: Apply hide/show logic if effect is active
    if (effectActive && Math.abs(currentScroll - lastThresholdCheck) > scrollThreshold) {
        if (currentScroll > lastScrollTop) {
            // Scroll Down: Hide the header
            header.classList.add('hidden');
        } else {
            // Scroll Up: Show the header
            header.classList.remove('hidden');
        }

        // Update the last threshold check
        lastThresholdCheck = currentScroll;
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// Add event listeners to all navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior

        const sectionId = link.getAttribute('data-section'); // Get the target section ID

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

const carouselImages = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-item').length;

let currentIndex = 0; // Track the current slide
let autoSlideInterval; // To store the interval ID

// Slide to the next image
function slideToNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarouselPosition();
}

// Slide to the previous image
function slideToPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarouselPosition();
}

// Update the carousel's position
function updateCarouselPosition() {
    const newTransform = -currentIndex * 100; // Slide by 100% of the container width
    carouselImages.style.transform = `translateX(${newTransform}%)`;
}

// Start the automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(slideToNextImage, 3000); // Slide every 3 seconds
}

// Stop the automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Add event listeners to stop auto-sliding when hovering over the carousel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

// Start auto-sliding on page load
startAutoSlide();

// Array of science facts
const facts = [
    "वैज्ञानिक शोध के अनुसार, शहद एकमात्र ऐसा खाद्य पदार्थ है जो कभी खराब नहीं होता।",
    "शनि ग्रह के छल्ले ज्यादातर बर्फ और धूल के छोटे टुकड़ों से बने होते हैं।",
    "मानव मस्तिष्क में लगभग 86 अरब न्यूरॉन्स होते हैं।",
    "ऑक्टोपस के तीन दिल होते हैं और उनका खून नीला होता है।",
    "अंतरिक्ष में, ध्वनि यात्रा नहीं कर सकती क्योंकि वहां हवा नहीं है।",
];

// Fact display functionality
const factText = document.getElementById("fact-text");
const newFactBtn = document.getElementById("new-fact-btn");

newFactBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factText.textContent = randomFact;

    // Button hover effect
    newFactBtn.style.backgroundColor = "#0056b3";
    setTimeout(() => {
        newFactBtn.style.backgroundColor = "#28a745";
    }, 100);
});

// Newsletter subscription form
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterResponse = document.getElementById("newsletter-response");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (newsletterEmail.value.trim() === "") {
        newsletterResponse.textContent = "कृपया एक मान्य ईमेल दर्ज करें।";
    } else {
        newsletterResponse.textContent =
            "सदस्यता के लिए धन्यवाद! जल्द ही आपको अपडेट्स प्राप्त होंगे।";
        newsletterEmail.value = "";
    }
});

// Array of quotes (same as your code)
const quotes = [
    {
        text: "सपने वो नहीं जो हम सोते वक्त देखते हैं, सपने वो हैं जो हमें सोने नहीं देते।",
        author: "डॉ. ए.पी.जे. अब्दुल कलाम",
    },
    {
        text: "जीवन में सबसे बड़ा धन स्वास्थ्य है, बाकी सबकुछ इसका अनुसरण करता है।",
        author: "महात्मा गांधी",
    },
    {
        text: "कड़ी मेहनत का कोई विकल्प नहीं होता।",
        author: "सचिन तेंदुलकर",
    },
    {
        text: "जो बदलता है वही आगे बढ़ता है।",
        author: "स्वामी विवेकानंद",
    },
    {
        text: "आप जितना कम बोलेंगे, उतना ज्यादा सुना जाएगा।",
        author: "चाणक्य",
    },
];

// Current quote index
let currentQuoteIndex = 0;

// Function to show the next quote
function showNextQuote() {
    // Increment the quote index
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;

    // Get quote elements
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    // Remove active class to trigger slide-out animation
    quoteText.classList.remove("slide-active");
    quoteAuthor.classList.remove("slide-active");

    // Delay to allow the slide-out animation to complete
    setTimeout(() => {
        // Update the text content
        quoteText.textContent = `"${quotes[currentQuoteIndex].text}"`;
        quoteAuthor.textContent = `- ${quotes[currentQuoteIndex].author}`;

        // Add active class to trigger slide-in animation
        quoteText.classList.add("slide-active");
        quoteAuthor.classList.add("slide-active");
    }, 1000); // Match this with the transition duration in CSS
}

// Automatically shuffle quotes every 15 seconds
function startQuoteRotation() {
    setInterval(() => {
        showNextQuote();
    }, 5000);
}

// Initialize with the first quote
window.onload = () => {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");

    // Set initial text content for the first quote
    quoteText.textContent = `"${quotes[0].text}"`;
    quoteAuthor.textContent = `- ${quotes[0].author}`;

    // Apply initial slide-in effect
    quoteText.classList.add("slide-active");
    quoteAuthor.classList.add("slide-active");

    // Start the automatic quote rotation
    startQuoteRotation();
};

// Feedback Form Submission Handling
document.getElementById("feedback-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the feedback text
    const feedbackText = document.getElementById("feedback-text").value;

    // Validate feedback input
    if (feedbackText.trim() === "") {
        document.getElementById("feedback-response").innerText =
            "कृपया अपनी प्रतिक्रिया लिखें।";
        return;
    }

    // Simulate a successful submission (replace with server-side logic if needed)
    document.getElementById("feedback-response").innerText =
        "धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक सबमिट हो गई है।";

    // Clear the input field
    document.getElementById("feedback-text").value = "";

    // Optional: Add a timeout to clear the message
    setTimeout(() => {
        document.getElementById("feedback-response").innerText = "";
    }, 5000); // Clear after 5 seconds
});