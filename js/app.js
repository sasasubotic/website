
document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.getElementById("landing-page");
    
    // Add event listener to shift page left on click
    landingPage.addEventListener("click", () => {
        landingPage.classList.add("shift-left");
        
        // Redirect after animation (adjust time if needed for animation)
        setTimeout(() => {
            window.location.href = "home.html";
        }, 600);
    });
});
