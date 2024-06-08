'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px learn more
 */

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('learnMoreButton');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var section = document.querySelector('.course');
        var offsetTop = section.offsetTop; // Get the top position of the section

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});




/**
 * show go top btn when scroll window to 500px
 */
 
 
 /**
 * show go top btn when scroll window to 500px learn more
 */

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('aboutBtn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var section = document.querySelector('.about');
        var offsetTop = section.offsetTop; // Get the top position of the section

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});

 /**
 * show go top btn when scroll window to 500px learn more
 */

 document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('serviceBtn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var section = document.querySelector('.course');
        var offsetTop = section.offsetTop; // Get the top position of the section

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});



/**
 * show go top btn when scroll window to 500px
 */
 


/**
 * show go top btn when scroll window to 500px learn more
 */

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('blogBtn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var section = document.querySelector('.blog');
        var offsetTop = section.offsetTop; // Get the top position of the section

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});




/**
 * show go top btn when scroll window to 500px
 */
 
 
 /**
 * show go top btn when scroll window to 500px learn more
 */

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('destinationBtn');
    learnMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        var section = document.querySelector('.destination');
        var offsetTop = section.offsetTop; // Get the top position of the section

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});
//footer starts


'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var subscribeForm = document.querySelector(".newsletter-form");
    var messageDiv = document.getElementById('message');

    subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.querySelector("input[name='email']").value;

        // Perform AJAX request to check if email exists in the database
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "subscribe.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = xhr.responseText;
                if (response === "exists") {
                    messageDiv.innerHTML = "Email already in use";
                } else if (response === "success") {
                    window.location.href = "redirect.html";
                }
            }
        };
        xhr.send("email=" + email);
    });
});


//footer ends



/**
 * show go top btn when scroll window to 500px
 */
 
 
 
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});











