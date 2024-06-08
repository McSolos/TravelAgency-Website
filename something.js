// JavaScript for expanding the article on button click

// Get the expand button
var expandBtn = document.querySelector(".expand-btn");

// Get the full article content
var articleFull = document.querySelector(".article-full");

// Add event listener to the button to toggle the full article
expandBtn.addEventListener("click", function() {
  // Toggle the display of the full article
  articleFull.classList.toggle("show");
  
  // Change the button text based on the state
  if (articleFull.classList.contains("show")) {
    expandBtn.textContent = "Read Less";
  } else {
    expandBtn.textContent = "Read More";
  }
});
