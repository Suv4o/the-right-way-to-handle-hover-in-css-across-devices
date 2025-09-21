// User-Agent sniffing logic from the blog article
const isTouchDevice = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

if (isTouchDevice) {
    document.body.classList.add("no-hover");
} else {
    document.body.classList.add("hover");
}

// Update the UI with detection results
document.addEventListener("DOMContentLoaded", function () {
    const behaviorIndicator = document.getElementById("behaviorIndicator");
    const userAgentDiv = document.getElementById("userAgent");
    const patternMatchSpan = document.getElementById("patternMatch");

    // Display the actual user agent
    userAgentDiv.textContent = navigator.userAgent;

    // Show pattern match result
    const regex = /Mobi|Android|iPhone|iPad/i;
    const match = regex.exec(navigator.userAgent);
    patternMatchSpan.innerHTML = match
        ? `<span style="color: #e74c3c;">Yes (matched: "${match[0]}")</span>`
        : `<span style="color: #27ae60;">No</span>`;

    if (isTouchDevice) {
        behaviorIndicator.innerHTML = `
            <span style="color: #e74c3c;">Mobile Device Detected</span><br>
            Only active/tap effects are enabled<br>
            <small>(Based on user-agent pattern matching)</small>
        `;
    } else {
        behaviorIndicator.innerHTML = `
            <span style="color: #2980b9;">Desktop Device Detected</span><br>
            Hover effects are enabled<br>
            <small>(No mobile patterns found in user-agent)</small>
        `;
    }

    // Add some debugging info
    console.log("User-Agent:", navigator.userAgent);
    console.log("Mobile pattern match:", isTouchDevice);
    console.log("Applied CSS class:", isTouchDevice ? "no-hover" : "hover");
});
