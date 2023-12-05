function validateForm() {
    let isValid = true;
    let errorMessage = "";

    // Validating empty fields
    if (document.getElementById('firstName').value == "") {
        errorMessage += "First Name is required.\n";
        isValid = false;
    }
    if (document.getElementById('lastName').value == "") {
        errorMessage += "Last Name is required.\n";
        isValid = false;
    }
    if (document.getElementById('email').value == "") {
        errorMessage += "Email is required.\n";
        isValid = false;
    }
    if (document.getElementById('password').value == "") {
        errorMessage += "Password is required.\n";
        isValid = false;
    }
    if (document.getElementById('confirmPassword').value == "") {
        errorMessage += "Confirm Password is required.\n";
        isValid = false;
    }

    // Validating email format
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email && !emailRegex.test(email)) {
        errorMessage += "Invalid email format.\n";
        isValid = false;
    }

    // Checking if passwords match
    if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
        errorMessage += "Passwords do not match.\n";
        isValid = false;
    }

    // Display error message or success message
    if (!isValid) {
        alert("Please correct the following errors:\n" + errorMessage);
    } else {
        alert("All information is valid.");
    }

    return isValid;
}

