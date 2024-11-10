
// Select the toggle button and the navbar items
const toggleButton = document.querySelector(".toggle_btn");
const navItems = document.querySelector(".nav_bar_items");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class to show/hide the nav items
    navItems.classList.toggle("active");
});