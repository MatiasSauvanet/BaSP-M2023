var userName = document.getElementById("form-name");
var lastName = document.getElementById("form-surname");
var dni = document.getElementById("form-dni");
var birthdate = document.getElementById("form-birthday");
var telephone = document.getElementById("form-phone-number");
var address = document.getElementById("form-direction");
var loc = document.getElementById("form-location");
var areaCode = document.getElementById("form-postal-code");
var email = document.getElementById("form-email");
var password = document.getElementById("form-password");
var passwordRepeat = document.getElementById("form-repeat-password")
var register = document.getElementById("form-button-register");

function setError(element, message) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

function setSuccess(element) {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

function isValidEmail(email) {
    var emailExpression = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    return emailExpression.test(email);
}

var numbers = "0123456789";
var letters="abcdefghyjklmnñopqrstuvwxyz";

function hasSpecialCharacters(text, space) {
    var spChar
    if (space) {
        var spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/! ";
    } else {
        var spChar = "/[[]#$%^&*()_+-=[]{};':\|,.<>/?]+/!";
    }
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

function validateInputName() {
    var userNameValue = userName.value.trim();
    if (userNameValue === '') {
        var textError = "Name is required.";
        setError(userName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (userNameValue.length < 3 ) {
        var textError = "Name must be at least 8 character.";
        setError(userName, textError);
        alertText = textError;
        return {var1: alertText, var2:false};
    } else if (hasSpecialCharacters(userNameValue, false)) {
        var textError = "Name cant contain special characters.";
        setError(userName, textError)
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasNumbers(userNameValue) === true) {
        var textError = "Name cant contain numbers.";
        setError(userName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(userName);
        alertText = userNameValue;
        return alertText;
    }
}

function validateInputLastname() {
    var lastNameValue = lastName.value.trim();
    if (lastNameValue === '') {
        var textError = "Lastname is required."
        setError(lastName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (lastNameValue.length < 3 ) {
        var textError = "Lastname must be at least 3 character.";
        setError(lastName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(lastNameValue, false)) {
        var textError = "Lastname cant contain special characters.";
        setError(lastName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasNumbers(lastNameValue) === true) {
        var textError = "Lastname cant contain numbers.";
        setError(lastName, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(lastName);
        alertText = lastNameValue;
        return alertText;
    }
}

function validateInputDni() {
    var dniValue = dni.value.trim();
    if (dniValue === '') {
        var textError = "Dni is required.";
        setError(dni, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (dniValue.length < 8 ) {
        var textError = "Dni must be at least 8 characters long.";
        setError(dni, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(dniValue, true)) {
        var textError = "Dni cant contain special characters.";
        setError(dni, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasLetters(dniValue) === true) {
        var textError = "Dni cant contain letters.";
        setError(dni, textError)
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(dni);
        alertText = dniValue;
        return alertText;
    }
}

function validateInputTelephone() {
    var telephoneValue = telephone.value.trim();
    if (telephoneValue === '') {
        var textError = "Telephone is required.";
        setError(telephone, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (telephoneValue.length != 10 ) {
        var textError = "Telephone must be at least 10 characters long.";
        setError(telephone, textError)
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(telephoneValue, true)) {
        var textError = "Telephone cant contain special characters."
        setError(telephone, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasLetters(telephoneValue) === true) {
        var textError = "Telephone cant contain letters.";
        setError(telephone, textError)
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(telephone);
        alertText = telephoneValue;
        return alertText;
    }
}

function validateInputAddress() {
    var addressValue = address.value.trim();
    if (addressValue === '') {
        var textError = "Address is required.";
        setError(address, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (addressValue.length < 5 ) {
        var textError = "Address must be at least 5 character.";
        setError(address, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(addressValue, false)) {
        var textError = "Address cant contain special characters.";
        setError(address, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (!hasLetters(addressValue) === true || !hasNumbers(addressValue) === true) {
        var textError = "Address must contain numbers and letters.";
        setError(address, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(address);
        alertText = addressValue;
        return alertText;
    }
}

function validateInputLocation() {
    var locValue = loc.value.trim();
    if (locValue === '') {
        var textError = "Location is required.";
        setError(loc, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (locValue.length < 3 ) {
        var textError = "Location must be at least 3 character.";
        setError(loc, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(locValue, false)) {
        var textError = "Location cant contain special characters.";
        setError(loc, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(loc);
        alertText = locValue;
        return alertText;
    }
}

function validateInputAreaCode() {
    var areaCodeValue = areaCode.value.trim();
    if (areaCodeValue === '') {
        var textError = "Area code is required.";
        setError(areaCode, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (areaCodeValue.length < 4 || areaCodeValue.length > 5 ) {
        var textError = "Area code must be between 4 and 5.";
        setError(areaCode, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(areaCodeValue, true)) {
        var textError = "Area code cant contain special characters.";
        setError(areaCode, textError)
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasLetters(areaCodeValue) === true) {
        var textError = "Area code cant contain letters.";
        setError(areaCode, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(areaCode);
        alertText = areaCodeValue;
        return alertText;
    }
}

function validateInputEmail() {
    var emailValue = email.value.trim();
    if (emailValue === '') {
        var textError = "Email is required.";
        setError(email, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (!isValidEmail(emailValue)) {
        var textError = "Provide a valid email address.";
        setError(email, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(email);
        alertText = emailValue;
        return alertText;
    }
}

function validateInputPassword() {
    var passwordValue = password.value.trim();
    if (passwordValue === '') {
        var textError = "Password is required.";
        setError(password, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (passwordValue.length < 8 ) {
        var textError = "Password must be at least 8 character.";
        setError(password, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(' ') > 0) {
        var textError = "Password cant contain special characters.";
        setError(password, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        var textError = "Password must contain numbers and letters.";
        setError(password, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(password);
        alertText = passwordValue;
        return alertText
    }
}

function validateInputPasswordRepeat() {
    var passwordRepeatValue = passwordRepeat.value.trim();
    var passwordValue = password.value.trim();
    if (passwordRepeatValue === '') {
        var textError = "Password repetition is required."
        setError(passwordRepeat, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else if (passwordRepeatValue === passwordValue) {
        setSuccess(passwordRepeat);
        alertText = passwordRepeatValue;
        return alertText;
    } else {
        var textError = "Password do not match."
        setError(passwordRepeat, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    }
}

// function validateInputBirthday() {
//     var birthdayValue = birthday.value.trim();
//     var dateEl = birthdayValue.split('-')
//     var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0]
//     if (birthdayValue === '') {
//         const textError = "Birthday is required."
//         setError(birthday, textError);
//         return alertText = textError;
//     } else {
//         setSuccess(birthday);
//         alertText = formattedDate;
//         return alertText
//     }
// }

function validateInputBirthdate() {
    var birthdateValue = birthdate.value.trim();
    var dateEl = birthdateValue.split('-');
    var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0];
    var currentDate = new Date();
    var selectedDate = new Date(dateEl[0], dateEl[1] - 1, dateEl[2]);
    var dateEl = birthdateValue.split('-');
    var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0];
    if (birthdateValue === '') {
        var textError = "Birth date is required.";
        setError(birthdate, textError);
        alertText = textError;
        return {var1: alertText, var2: false}
    } else if (selectedDate > currentDate) {
        var textError = "Birth date cannot be in the future.";
        setError(birthdate, textError);
        alertText = textError;
        return {var1: alertText, var2: false};
    } else {
        setSuccess(birthdate);
        alertText = formattedDate;
        return alertText;
    }
}

function loginRequest() {
    var nameValue = document.getElementById("form-name").value;
    var surnameValue = document.getElementById("form-surname").value;
    var dniValue = document.getElementById("form-dni").value;
    var birthValue = document.getElementById("form-birthday").value;
    var birthValueSplit = birthValue.split("-");
    var formattedBirthValue = birthValueSplit[1] + "/" + birthValueSplit[2] + "/" + birthValueSplit[0];
    var phoneValue = document.getElementById("form-phone-number").value;
    var addressValue = document.getElementById("form-direction").value;
    var cityValue = document.getElementById("form-location").value;
    var codeValue = document.getElementById("form-postal-code").value;
    var emailValue = document.getElementById("form-email").value;
    var passwordValue = document.getElementById("form-password").value;

    var url = "https://api-rest-server.vercel.app/signup?name=" + nameValue + "&lastName="
    + surnameValue + "&dni=" + dniValue + "&dob=" + formattedBirthValue + "&phone=" + phoneValue +
    "&address=" + addressValue + "&city=" + cityValue + "&zip=" + codeValue +
    "&email=" + emailValue + "&password=" + passwordValue
    fetch(url)
        .then(function(response) {
        if (response.status === 404) {
            alert("There was an error while submitting the request." + " " + "Error type: " + response.status);
            throw new Error("Request error.");
        } else {
            return response.json();
        }
    })
    .then(function(data) {
        alert(`The request was successfully completed.` + " " + data.msg);
        localStorage.setItem("name", nameValue);
        localStorage.setItem("surname", surnameValue);
        localStorage.setItem("dni", dniValue);
        localStorage.setItem("dob", birthValue);
        localStorage.setItem("phone", phoneValue);
        localStorage.setItem("address", addressValue);
        localStorage.setItem("city", cityValue);
        localStorage.setItem("zip", codeValue);
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
    })
    .catch(function(error) {
        console.error(error);
    })
}

function submitForm() {
    var innerAlert = ""
    validateInputName()
    innerAlert += alertText + "\n";
    validateInputLastname();
    innerAlert += alertText + "\n";
    validateInputDni();
    innerAlert += alertText + "\n";
    validateInputTelephone();
    innerAlert += alertText + "\n";
    validateInputAddress();
    innerAlert += alertText + "\n";
    validateInputLocation();
    innerAlert += alertText + "\n";
    validateInputAreaCode();
    innerAlert += alertText + "\n";
    validateInputEmail();
    innerAlert += alertText + "\n";
    validateInputPassword();
    innerAlert += alertText + "\n";
    validateInputEmail();
    innerAlert += alertText + "\n";
    validateInputPasswordRepeat();
    innerAlert += alertText + "\n";
    validateInputBirthdate();
    innerAlert += alertText + "\n";
    alert(innerAlert);

    var isValidName = validateInputName();
    var isValidLastName = validateInputLastname();
    var isValidDni = validateInputDni();
    var isValidBirthdate = validateInputBirthdate();
    var isValidTelephone = validateInputTelephone();
    var isValidAddress = validateInputAddress();
    var isValidLoc = validateInputLocation();
    var isValidAreaCode = validateInputAreaCode();
    var isValidEmail = validateInputEmail();
    var isValidPassword = validateInputPassword();
    var isValidPasswordRepeat = validateInputPasswordRepeat();

    if (isValidName.var2 === false || isValidLastName.var2 === false || isValidDni.var2 === false ||
        isValidBirthdate.var2 === false || isValidTelephone.var2 === false || isValidAddress.var2 === false ||
        isValidLoc.var2 === false || isValidAreaCode.var2 === false || isValidEmail.var2 === false || isValidPassword.var2 === false ||
        isValidPasswordRepeat.var2 === false) {
    } else {
        loginRequest();
    }
}

userName.addEventListener("blur", validateInputName);
userName.addEventListener("focus", function e() {setSuccess(userName)});
lastName.addEventListener("blur", validateInputLastname);
lastName.addEventListener("focus", function e() {setSuccess(lastName)});
dni.addEventListener("blur", validateInputDni);
dni.addEventListener("focus", function e() {setSuccess(dni)});
telephone.addEventListener("blur", validateInputTelephone);
telephone.addEventListener("focus", function e() {setSuccess(telephone)});
address.addEventListener("blur", validateInputAddress);
address.addEventListener("focus", function e() {setSuccess(address)});
loc.addEventListener("blur", validateInputLocation);
loc.addEventListener("focus", function e() {setSuccess(loc)});
areaCode.addEventListener("blur", validateInputAreaCode);
areaCode.addEventListener("focus", function e() {setSuccess(areaCode)});
email.addEventListener("blur", validateInputEmail);
email.addEventListener("focus", function e() {setSuccess(email)});
password.addEventListener("blur", validateInputPassword);
password.addEventListener("focus", function e() {setSuccess(password)});
passwordRepeat.addEventListener("blur", validateInputPasswordRepeat);
passwordRepeat.addEventListener("focus", function e() {setSuccess(passwordRepeat)});
birthdate.addEventListener("blur", validateInputBirthdate);
birthdate.addEventListener("focus", function e() {setSuccess(birthdate)});
register.addEventListener("click", submitForm);

window.onload = function() {
    if (localStorage.getItem('name')) {
        userName.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('surname')) {
        lastName.value = localStorage.getItem('surname');
    }
    if (localStorage.getItem('dni')) {
        dni.value = parseInt(localStorage.getItem('dni'));
    }
    if (localStorage.getItem('dob')) {
        birthdate.value = localStorage.getItem('dob');
    }
    if (localStorage.getItem('phone')) {
        telephone.value = parseInt(localStorage.getItem('phone'));
    }
    if (localStorage.getItem('address')) {
        address.value = localStorage.getItem('address');
    }
    if (localStorage.getItem('city')) {
        loc.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('zip')) {
        areaCode.value = parseInt(localStorage.getItem('zip'));
    }
    if (localStorage.getItem('email')) {
        email.value = localStorage.getItem('email');
    }
}