// hideElement.js

document.addEventListener("DOMContentLoaded", function() {
    hideElement();
});

function hideElement() {
    var element = document.querySelector('a[data-testid="linkElement"]');
    if (element) {
        element.style.display = "none";
    }
}

// Optionally, you can export the function if you plan to use it in other scripts
// module.exports = hideElement;
