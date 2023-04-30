var userName = document.getElementById("form-name");
var lastName = document.getElementById("form-surname");
var dni = document.getElementById("form-dni");
var birthday = document.getElementById("form-birthday");
var telephone = document.getElementById("form-phone-number");
var address = document.getElementById("form-direction");
var loc = document.getElementById("form-location");
var areaCode = document.getElementById("form-postal-code");
var email = document.getElementById("form-email");
var password = document.getElementById("form-password");
var passwordRepeat = document.getElementById("form-repeat-password")
var register = document.getElementById("form-button-register");
// console.log(register)

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
        return alertText = textError;
    } else if (userNameValue.length < 3 ) {
        var textError = "Name must be at least 8 character.";
        setError(userName, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(userNameValue, false)) {
        var textError = "Name cant contain special characters.";
        setError(userName, textError)
        alertText = textError;
        return alertText;
    } else if (hasNumbers(userNameValue) === true) {
        var textError = "Name cant contain numbers.";
        setError(userName, textError);
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (lastNameValue.length < 3 ) {
        var textError = "Lastname must be at least 3 character.";
        setError(lastName, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(lastNameValue, false)) {
        var textError = "Lastname cant contain special characters.";
        setError(lastName, textError);
        alertText = textError;
        return alertText;
    } else if (hasNumbers(lastNameValue) === true) {
        var textError = "Lastname cant contain numbers.";
        setError(lastName, textError);
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (dniValue.length < 8 ) {
        var textError = "Dni must be at least 8 characters long.";
        setError(dni, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(dniValue, true)) {
        var textError = "Dni cant contain special characters.";
        setError(dni, textError);
        alertText = textError;
        return alertText;
    } else if (hasLetters(dniValue) === true) {
        var textError = "Dni cant contain letters.";
        setError(dni, textError)
        alertText = textError;
        return alertText;
    } else {
        setSuccess(dni);
        alertText = dniValue;
        return alertTextDniSuccess;
    }
}

function validateInputTelephone() {
    var telephoneValue = telephone.value.trim();
    if (telephoneValue === '') {
        var textError = "Telephone is required.";
        setError(telephone, textError);
        return alertText = textError;
    } else if (telephoneValue.length != 10 ) {
        var textError = "Telephone must be at least 10 characters long.";
        setError(telephone, textError)
        alertText = textError;
        return alertText
    } else if (hasSpecialCharacters(telephoneValue, true)) {
        var textError = "Telephone cant contain special characters."
        setError(telephone, textError);
        alertText = textError;
        return alertText;
    } else if (hasLetters(telephoneValue) === true) {
        var textError = "Telephone cant contain letters.";
        setError(telephone, textError)
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (addressValue.length < 5 ) {
        var textError = "Address must be at least 5 character.";
        setError(address, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(addressValue, false)) {
        var textError = "Address cant contain special characters.";
        setError(address, textError);
        alertText = textError;
        return alertText;
    } else if (!hasLetters(addressValue) === true || !hasNumbers(addressValue) === true) {
        var textError = "Address must contain numbers and letters.";
        setError(address, textError);
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (locValue.length < 3 ) {
        var textError = "Location must be at least 3 character.";
        setError(loc, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(locValue, false)) {
        var textError = "Location cant contain special characters.";
        setError(loc, textError);
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (areaCodeValue.length < 4 || areaCodeValue.length > 5 ) {
        var textError = "Area code must be between 4 and 5.";
        setError(areaCode, textError);
        alertText = textError;
        return alertText;
    } else if (hasSpecialCharacters(areaCodeValue, true)) {
        var textError = "Area code cant contain special characters.";
        setError(areaCode, textError)
        alertText = textError;
        return alertText;
    } else if (hasLetters(areaCodeValue) === true) {
        var textError = "Area code cant contain letters.";
        setError(areaCode, textError);
        alertText = textError;
        return alertText
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
        return alertText;
    } else if (!isValidEmail(emailValue)) {
        var textError = "Provide a valid email address.";
        setError(email, textError);
        alertText = textError;
        return alertText;
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
        return alertText = textError;
    } else if (passwordValue.length < 8 ) {
        var textError = "Password must be at least 8 character.";
        setError(password, textError);
        alertText = textError;
        return alertText
    } else if (hasSpecialCharacters(passwordValue) || passwordValue.indexOf(' ') > 0) {
        var textError = "Password cant contain special characters.";
        setError(password, textError);
        alertText = textError;
        return alertText
    } else if (!hasLetters(passwordValue) === true || !hasNumbers(passwordValue) === true) {
        var textError = "Password must contain numbers and letters.";
        setError(password, textError);
        alertText = textError;
        return alertText
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
        return alertText = textError;
    } else if (passwordRepeatValue === passwordValue) {
        setSuccess(passwordRepeat);
        alertText = passwordRepeatValue;
        return alertText
    } else {
        var textError = "Password do not match."
        setError(passwordRepeat, textError)
        alertText = textError;
        return alertText
    }
}

function validateInputBirthday() {
    var birthdayValue = birthday.value.trim();
    var dateEl = birthdayValue.split('-')
    var formattedDate = dateEl[2] + '/' + dateEl[1] + '/' + dateEl[0]
    if (birthdayValue === '') {
        const textError = "Birthday is required."
        setError(birthday, textError);
        return alertText = textError;
    } else {
        setSuccess(birthday);
        alertText = formattedDate;
        return alertText
    }
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
    validateInputBirthday();
    innerAlert += alertText + "\n";
    fetchUrl(url)
    alert(innerAlert);
}

var url = `https://api-rest-server.vercel.app/signup?name=${userName.value}&lastName=${lastName.value}&dni=${dni.value}
    &dob=${birthday.value}&phone=${telephone.value}&address=${address.value}&city=${location.value}&zip=
    ${areaCode.value}&email=${email.value}&password=${password.value}&password=${passwordRepeat.value}`

function fetchUrl(url) {
    return fetch(url)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(function(error) {
            throw new Error(error.message);
          });
        }
      })
      .then(function (data) {
        alert(data.msg);
        console.log(data);
        return data;
      })
      .catch(function (error) {
        alert('Ha ocurrido un error al realizar la solicitud: ' + error.message);
        console.log(error);
      });
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
birthday.addEventListener("blur", validateInputBirthday);
birthday.addEventListener("focus", function e() {setSuccess(birthday)});
register.addEventListener("click", submitForm);