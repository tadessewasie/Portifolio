// JavaScript for "Back to Top" button functionality
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Show button when scrolling down
window.onscroll = function() {
    const button = document.getElementById("back-to-top");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Initially hide the button
document.getElementById("back-to-top").style.display = "none";
