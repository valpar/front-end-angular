var firstnameVal = localStorage.getItem("firstname");
var lastnameVal = localStorage.getItem("lastname");
var phoneVal = localStorage.getItem("phone");
var emailVal = localStorage.getItem("email");

var firstNameHtml = document.getElementById("firstname");
var lastNameHtml = document.getElementById("lastname");
var phoneHtml = document.getElementById("phone");
var emailHtml = document.getElementById("email");

firstNameHtml.innerHTML = firstnameVal;
lastNameHtml.innerHTML = lastnameVal;
phoneHtml.innerHTML = phoneVal;
emailHtml.innerHTML = emailVal;

class Person {
    constructor(firstname, lastname, phone, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
    }
}

function onReviewSubmit(){
    console.log("Vajutus töötab");

    //javscript OR operator || - does one or another
    //Esimene kord kui ei ole localstorages:
    //var registrationList = []; -- alati, ei saa seda kasutada, teeb iga kord tühja listi
    //kui juba on olemas, siis teeb nii:
    //var registrationList = localStorage.getItem("registrations") -- (alati, ei saa seda kasutada, viskab errori, kui seda ei ole)
    var registrationList = JSON.parse(localStorage.getItem("registrations")) || [];

    registrationList.push(new Person(firstnameVal, lastnameVal, phoneVal, emailVal));

    console.log(registrationList);
    console.log(JSON.stringify(registrationList));
    localStorage.setItem("registrations", JSON.stringify(registrationList));
}