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