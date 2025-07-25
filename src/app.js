document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const personalNumber = document.getElementById('personalNumber');
    const email = document.getElementById('email');
    const password = document.getElementById('password');



    const personalNum = personalNumber.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    // id number
    
    if (!/^\d{11}$/.test(personalNum)) {
        personalNumber.setCustomValidity("Must be 11 digits");
        isValid = false;
    } else {
        personalNumber.setCustomValidity("");
    }

    // mail
    if (!emailValue.endsWith("@gmail.com")) {
        email.setCustomValidity("Email must end with @gmail.com");
        isValid = false;
    } else {
        email.setCustomValidity("");
    }

    // password
    if (passwordValue.length < 8) {
        password.setCustomValidity("Password must be at least 8 characters long");
        isValid = false;
    } else {
        password.setCustomValidity("");
    }

    // submit form
    if (isValid) {
        alert("Sign Up Successfuly Complited!");
        event.target.reset();
    } else {
        event.target.reportValidity();
    }
});

document.getElementById('personalNumber').placeholder = "ID of 11 digits";
document.getElementById('email').placeholder = "example@gmail.com";
document.getElementById('password').placeholder = "Password of at least 8 characters";
