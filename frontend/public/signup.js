// Toggle between forms (login and signup)
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Handle Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const mobileNo = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: mobileNo, // Use mobileNo as username
            password: password,
        }),
    });

    const data = await response.json();

    if (response.ok) {
        alert('Account created successfully!');
        toggleForms(); // After successful signup, show the login form
    } else {
        alert(data.error);
    }
});

// Handle Log In Form Submission
document.getElementById("loginBtn").addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Store authentication token in localStorage
            localStorage.setItem("authToken", data.token);

            // Redirect to the main page
            window.location.href = "http://localhost:3000"; // You can change the URL
        } else {
            alert("Invalid credentials. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error. Please try again later.");
    }
});