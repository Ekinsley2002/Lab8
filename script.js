function validateInfo() {
    let correct = true;
    let errorMessage = "";


    if (document.getElementById('first_name').value == "") {
        errorMessage += "Please enter your first name.\n";
        isValid = false;
    }
    if (document.getElementById('last_name').value == "") {
        errorMessage += "Please enter your last name.\n";
        isValid = false;
    }

    if (document.getElementById('confirm_password').value == "") {
        errorMessage += "Please confirm your password.\n";
        isValid = false;
    }

    if (document.getElementById('email').value == "") {
        errorMessage += "Please enter your email.\n";
        isValid = false;
        
    }
        
    if (document.getElementById('password').value == "") {
        errorMessage += "Password is required.\n";
        isValid = false;
    }
    

    // Validating email format
    var email = document.getElementById('email').value;
        
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
    if (email && !emailRegex.test(email)) {
        errorMessage += "Invalid email.\n";
        correct = false;
    }

    // Checking if passwords match
    if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
        errorMessage += "Passwords do not match.\n";
        correct = false;
    }

    // Display error message or success message
    if (!correct) {
        alert("Please correct the following errors:\n" + errorMessage);
    } 
        
    else {
        alert("All information is valid.");
    }

    return correct;
        
}

