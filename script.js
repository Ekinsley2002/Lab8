function validateInfo() {
    
    let correct = true;
    let errorMes = "";
    
    const firstName = DOMPurify.sanitize(document.getElementById('first_name').value);
    const lastName = DOMPurify.sanitize(document.getElementById('last_name').value);
    const email = DOMPurify.sanitize(document.getElementById('email').value);

    if (document.getElementById('first_name').value == "") {
        errorMes += "Please enter your first name.\n";
        correct = false;
    }
    if (document.getElementById('last_name').value == "") {
        errorMes += "Please enter your last name.\n";
        correct = false;
    }

    if (document.getElementById('confirm_password').value == "") {
        errorMes += "Please confirm your password.\n";
        correct = false;
    }

    if (document.getElementById('email').value == "") {
        errorMes += "Please enter your email.\n";
        correct = false;
    
    }
        
    if (document.getElementById('password').value == "") {
        errorMes += "Password is required.\n";
        correct = false;
    }
    

    // Validating email format
    var email = document.getElementById('email').value;
        
    var emailIndex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
    if (email && !emailIndex.test(email)) {
        errorMes += "Invalid email.\n";
        correct = false;
    }

    // Checking if passwords match
    if (document.getElementById('password').value != document.getElementById('confirm_password').value) {
        errorMes += "Password needs to match confirm password.\n";
        correct = false;
    }

    // Display error message or success message
    if (!correct) {
        alert("Please correct the following errors:\n" + errorMes);
    } 
        
    else {
        alert("All information is valid.");
    }

    return correct;
        
}

