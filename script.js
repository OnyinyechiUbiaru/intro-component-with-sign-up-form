var firstNameError = document.getElementById ('firstname-error');
var lastNameError = document.getElementById('lastname-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');



function validateFirstName(){
    var name = document.getElementById('firstname').value;

    if(name.length == 0){
        firstNameError.innerHTML = 'First Name cannot be empty'
        return false;
    }
}

    function validateLastName(){
        var lastname = document.getElementById('lastname').value;

        if(lastname.length == 0){
    lastNameError.innerHTML = 'Last Name cannot be empty';
    return false;

    }
}

    function validateEmailAddress(){
        var email = document.getElementById('email').value;

        if(email.length == 0){
    emailError.innerHTML = 'Looks like this is not an email';
    return false;

    }
}

    function validatePassword(){
        var password = document.getElementById('lastname').value;

        if(password.length == 0){
    lastNameError.innerHTML = 'Password cannot be empty';
    return false;

    }
}

function validateForm(){
    if(!validateFirstName() || !validateLastName() || !validateEmailAddress()|| !validatePassword()||){
       return false;
    }
}