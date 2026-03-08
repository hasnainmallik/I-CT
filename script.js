// 1. Alert message when the page loads
window.onload = function() {
    alert("Welcome to Hasnain's Portfolio!");
};

// 2. Button to change the background color
function changeBackgroundColor() {
    const colors = ["#FF6347", "#3CB371", "#00BFFF", "#FFD700", "#8A2BE2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// 3. Form validation for contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation for empty fields
    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

