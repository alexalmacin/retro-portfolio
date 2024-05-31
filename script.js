document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        // Hide the prompt asking for Enter press
        document.getElementById("landingPage").style.display = "none";
        // Show the menu
        const menu = document.getElementById("menu");
        menu.classList.remove("hidden");
        // Focus the menu for arrow key navigation
        menu.focus();
    }
});

// Handle arrow key navigation and Enter key selection in the menu
document.getElementById("menu").addEventListener('keydown', function(event) {
    const menuItems = document.querySelectorAll("#menuItems li a");
    let selectedIndex = -1;
    // Find the index of the currently selected item
    menuItems.forEach(function(item, index) {
        if (item === document.activeElement) {
            selectedIndex = index;
        }
    });
    if (event.key === "ArrowDown") {
        // Move selection down
        selectedIndex = Math.min(selectedIndex + 1, menuItems.length - 1);
    } else if (event.key === "ArrowUp") {
        // Move selection up
        selectedIndex = Math.max(selectedIndex - 1, 0);
    } else if (event.key === "Enter") {
        // Handle selection on Enter key press
        menuItems[selectedIndex].click(); // Simulate click on the selected item
    }
    // Set focus to the newly selected item
    menuItems[selectedIndex].focus();
    event.preventDefault(); // Prevent default scrolling behavior
});
  // Redirect users to the main page
  function redirectToMainPage() {
    window.location.href = 'home-page.html'
  }

  // Check if the device is a mobile device
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || navigator.vendor || window.opera)
}

  // Redirect mobile users directly to the main page
  if (isMobileDevice()) {
    redirectToMainPage()
  }
