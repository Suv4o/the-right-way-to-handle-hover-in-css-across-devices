// Detect and display current hover capability using JavaScript
// (This is just for demonstration - the CSS @media (hover) does the actual work)
document.addEventListener("DOMContentLoaded", function () {
    const behaviorIndicator = document.getElementById("behaviorIndicator");

    // Test if the browser supports @media (hover)
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    const supportsNoHover = window.matchMedia("(hover: none)").matches;

    let hoverCapability = "unknown";
    let explanation = "";
    let color = "#7f8c8d";

    if (supportsHover) {
        hoverCapability = "hover supported";
        explanation = "This device supports precise hover (mouse, trackpad, etc.)";
        color = "#27ae60";
    } else if (supportsNoHover) {
        hoverCapability = "hover not supported";
        explanation = "This device doesn't support hover (touchscreen, etc.)";
        color = "#e74c3c";
    } else {
        hoverCapability = "hover capability unknown";
        explanation = "Browser doesn't support @media (hover) queries";
        color = "#f39c12";
    }

    behaviorIndicator.innerHTML = `
        <span style="color: ${color};">${hoverCapability.toUpperCase()}</span><br>
        ${explanation}
    `;

    // Add some interactive feedback
    const buttons = document.querySelectorAll(".demo-button");
    const card = document.querySelector(".card");

    // Log interactions for debugging
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            if (supportsHover) {
                console.log("Hover event on button (hover supported)");
            }
        });

        button.addEventListener("click", () => {
            console.log("Click event on button");
        });

        button.addEventListener("touchstart", () => {
            if (supportsNoHover) {
                console.log("Touch event on button (hover not supported)");
            }
        });
    });

    card.addEventListener("mouseenter", () => {
        if (supportsHover) {
            console.log("Hover event on card (hover supported)");
        }
    });

    card.addEventListener("click", () => {
        console.log("Click event on card");
    });

    // Display additional technical information
    console.log("@media (hover: hover) matches:", supportsHover);
    console.log("@media (hover: none) matches:", supportsNoHover);
    console.log("User agent:", navigator.userAgent);
    console.log("Touch points:", navigator.maxTouchPoints || 0);
    console.log("Touch support:", "ontouchstart" in window);
});
