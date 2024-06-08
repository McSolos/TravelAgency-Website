// JavaScript for countdown timer and redirection
var countdownDisplay = document.getElementById('countdown'); // Reference to the countdown container
var countdownSeconds = 5; // Number of seconds for the countdown

function updateCountdown() {
    countdownDisplay.textContent = 'Redirecting in ' + countdownSeconds + ' seconds...'; // Display the remaining time
    countdownSeconds--; // Decrease the remaining time
    if (countdownSeconds < 0) {
        clearInterval(timer); // Stop the countdown when it reaches 0
        window.location.href = "index.html"; // Redirect to the desired URL
    }
}

// Call updateCountdown every second
var timer = setInterval(updateCountdown, 1000);
