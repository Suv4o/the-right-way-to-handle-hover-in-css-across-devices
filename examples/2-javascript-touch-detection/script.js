// Touch detection logic from the blog article
const hasTouch = "ontouchstart" in window && navigator.maxTouchPoints > 0;

if (hasTouch) {
    document.body.classList.add("no-hover");
} else {
    document.body.classList.add("hover");
}

// Update the UI with detection results
document.addEventListener("DOMContentLoaded", function () {
    const behaviorIndicator = document.getElementById("behaviorIndicator");
    const ontouchstartSpan = document.getElementById("ontouchstart");
    const maxTouchPointsSpan = document.getElementById("maxTouchPoints");

    // Display detection results
    ontouchstartSpan.textContent = "ontouchstart" in window ? "true" : "false";
    maxTouchPointsSpan.textContent = navigator.maxTouchPoints || 0;

    if (hasTouch) {
        behaviorIndicator.innerHTML = `
            <span style="color: #e74c3c;">Touch Device Detected</span><br>
            Only active/tap effects are enabled<br>
            <small>(Even if this device also supports hover)</small>
        `;
    } else {
        behaviorIndicator.innerHTML = `
            <span style="color: #2980b9;">Non-Touch Device</span><br>
            Hover effects are enabled
        `;
    }

    // Add some visual feedback about the current classification
    const button = document.querySelector(".demo-button");

    if (hasTouch) {
        button.addEventListener("touchstart", function () {
            console.log("Touch detected - using active state");
        });
    } else {
        button.addEventListener("mouseenter", function () {
            console.log("Mouse hover detected");
        });
    }
});
