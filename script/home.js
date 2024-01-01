document.addEventListener("DOMContentLoaded", function() {
    const texts = ["a Full Stack Web Developer", "a Software Engineering Student", "an Enthusiastic Learner"];
    let index = 0;
    const textContainer = document.getElementById("textContainer");

    function eraseText(text) {
        let length = text.length;

        if (length > 0) {
            textContainer.textContent = text.substring(0, length - 1);
            setTimeout(() => eraseText(text.substring(0, length - 1)), 50); // Adjust the delay between erasing each letter (50 milliseconds here)
        } else {
            // After erasing, start showing the next word
            index = (index + 1) % texts.length;
            animateText(texts[index]);
        }
    }

    function animateText(text) {
        textContainer.textContent = ''; // Clear the existing text
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                textContainer.textContent += text[i];
            }, i * 100); // Adjust the delay between letters (100 milliseconds here)
        }

        // After showing the word, initiate erasing
        setTimeout(() => eraseText(text), text.length * 100 + 1000); // Adjust the delay before erasing starts (1000 milliseconds here)
    }
    
    // Start the initial animation
    animateText(texts[index]);
});

