function validateForm() {
    // Validating empty fields
    if (document.getElementById('firstName').value == "" ||
        document.getElementById('lastName').value == "" ||
        document.getElementById('email').value == "" ||
        document.getElementById('password').value == "" ||
        document.getElementById('confirmPassword').value == "") {
        alert("All fields must be filled out");
        return false;
    }

    // Validating email format
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // Checking if passwords match
    if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
