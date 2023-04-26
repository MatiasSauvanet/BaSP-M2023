var email = document.getElementById("form-mail");
var password = document.getElementById("form-password");
var login = document.getElementById("form-continue-button");

var setError = function (element, message) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success")
}

var setSuccess = function (element) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector (".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

function isValidEmail(email) {
    var emailExpression = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    return emailExpression.test(email);
}

var numbers = "0123456789";
var letters = "abcdefghijklmnñopqrstuvwxyz";

function hasSpecialCharacters(text) {
    let spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/! ";
    for (var i = 0; i < text.length; i++) {
       if (spChar.indexOf(text.charAt(i)) != -1) {
           return true;
       }
    }
    return false;
}

function hasLetters(text){
    text = text.toLowerCase();
    for(i = 0; i < text.length; i++){
        if (letters.indexOf(text.charAt(i),0) != -1) {
            return true;
        }
    }
    return false;
}

function hasNumbers(text){
    for(i=0; i<text.length; i++){
       if (numbers.indexOf(text.charAt(i),0)!=-1){
          return true;
       }
    }
    return false;
 }

 function validateInputEmail() {
    var emailValue = email.value.trim();
    if (emailValue === '') {
        var textError = "Email is required."
        setError(email, textError);
        alertTextEmailError = textError;
        return alertTextEmailError
    } else if (!isValidEmail(emailValue)) {
        var textError = "Provide a valid email address."
        setError(email, textError);
        alertTextEmailError = textError;
        return alertTextEmailError
    } else {
        setSuccess(email);
        alertTextEmailSuccess = emailValue;
        return alertTextEmailSuccess
    }
}

function validateInputPassword() {
    var passwordValue = password.value.trim();
    if (passwordValue === "") {
        var textError = "Password is required."
        setError(password, textError);
        return alertTextPasswordError = textError;
    } else if (passwordValue.length < 8 ) { 
        var textError = "Password must be at least 8 characters."
        setError(password, textError)
        alertTextPasswordError = textError;
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(" ") > 0) {
        var textError = "Password cant contain special characters."
        setError(password, textError);
        return alertTextPasswordError
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        var textError = "Password must contain numbers and letters."
        setError(password, textError)
        alertTextPasswordError = textError;
        return alertTextPasswordError
    } else {
        setSuccess(password);
        alertTextPasswordSuccess = passwordValue;
        return alertTextPasswordSuccess
    }     
}

function submitForm() {
    validateInputEmail()
    validateInputPassword()
    var parentEmail = email.parentElement;
    var parentPassword = password.parentElement;
    var valEmailError = parentEmail.classList.contains("error")
    var valPasswordError = parentPassword.classList.contains("error")
    console.log(valEmailError, valPasswordError)
    if (valEmailError && valPasswordError) {
        alert("Login error" + "\n" + alertTextPasswordError + "\n" + alertTextEmailError)
    } else if (valEmailError) {
        alert("Email Error" + "\n" + alertTextPasswordSuccess + "\n" + alertTextEmailError)
    } else if (valPasswordError) {
        alert("Password Error" + "\n" + alertTextPasswordError + "\n" + alertTextEmailSuccess)
    } else {
        alert("Welcome to MEGAROCKETGYM" + "\n" + alertTextPasswordSuccess + "\n" + alertTextEmailSuccess)
    }
}

email.addEventListener("blur", validateInputEmail);
email.addEventListener("focus", function e() {setSuccess(email)});
password.addEventListener("blur", validateInputPassword);
password.addEventListener("focus", function e() {setSuccess(password)});
login.addEventListener("click", submitForm)