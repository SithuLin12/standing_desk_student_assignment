document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement; // Get the parent accordion item
        const content = item.querySelector('.accordion-content'); // Select the content inside the clicked header
        
        // Toggle the active class for the accordion item
        item.classList.toggle('active');

        // Toggle the display of the content
        if (item.classList.contains('active')) {
            content.style.display = 'block'; // Show content when active
        } else {
            content.style.display = 'none'; // Hide content when not active
        }
    });
});

// Select the toggle button and the navbar items
const toggleButton = document.querySelector(".toggle_btn");
const navItems = document.querySelector(".nav_bar_items");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class to show/hide the nav items
    navItems.classList.toggle("active");
});