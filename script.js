// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and the hidden message
    const revealButton = document.getElementById("revealButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    // Check if the button exists to avoid errors on other pages
    if (revealButton) {
        // Add a click event listener to the button
        revealButton.addEventListener("click", function() {
            // Toggle the visibility of the hidden message
            if (hiddenMessage.classList.contains("hidden")) {
                hiddenMessage.classList.remove("hidden");
                revealButton.textContent = "Hide My Feelings"; // Change button text
            } else {
                hiddenMessage.classList.add("hidden");
                revealButton.textContent = "Reveal My Feelings"; // Change button text back
            }
        });
    }
});