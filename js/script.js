
//Project

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".project-slide");
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all slides first 
        slides.forEach(slide => slide.classList.remove("active"));
        
        // Show the one we want 
        if (slides[index]) {
            slides[index].classList.add("active");
        }
    }

    // Attach to all Next button
    document.querySelectorAll(".nextBtn").forEach(button => {
        button.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    });

    // Attach to all Previous buttons
    document.querySelectorAll(".prevBtn").forEach(button => {
        button.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    });

    // Initialize the first project 
    showSlide(currentIndex);
});




/**Contact */
/* Contact Form Validation Logic */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const subjectBox = document.getElementById("subject");
    const nameBox = document.getElementById("name");

    // Live Character Counter
    messageBox.addEventListener("input", () => {
        const length = messageBox.value.length;
        charCount.textContent = `${length} / 500 characters`;
        
        // Color change as they approach limit
        charCount.style.color = length > 480 ? "red" : "#777";
    });

    // Form Submission and Character Limit Validation
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        
        const subjectLen = subjectBox.value.trim().length;
        const messageLen = messageBox.value.trim().length;
        const nameVal = nameBox.value.trim();

        // 1. Name should not be empty
        if (nameVal === "") {
            alert("Name is required.");
            return;
        }

        // 2. Subject Min/Max Character Limit
        if (subjectLen < 5 || subjectLen > 50) {
            alert("Subject must be between 5 and 50 characters.");
            return;
        }

        // 3. Message Min/Max Character Limit
        if (messageLen < 10 || messageLen > 500) {
            alert("Message must be between 10 and 500 characters.");
            return;
        }

        // If all validations pass
        const success = document.getElementById("successMessage");
        success.textContent = "Thank you, " + nameVal + "! Your message has been sent.";
        success.style.display = "block";
        
        form.reset();
        charCount.textContent = "0 / 500 characters";
    });
});