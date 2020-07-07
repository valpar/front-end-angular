var registrationsDiv = document.getElementById("registrations");
var registrationsData = "";

function onSubmit(e){
    // preventDefaulti abil ei tule refreshi
    // e tähendab eventi
    e.preventDefault();
    console.log(e);
    console.log("töötab");

    var registrationForm = document.forms["registrationForm"];
    //console.log(registration["firstname"]);
    //console.log(registration["firstname"].value);
    var firstName = registrationForm["firstname"].value;
    console.log(firstName);
    var lastName = registrationForm["lastname"].value;
    console.log(lastName);
    var number = registrationForm["phone"].value;
    console.log(number);
    var email = registrationForm["email"].value;
    console.log(email);

    registrationForm.reset();

    // registrationsData += "Nimi: "+ firstName + "<br> Perekonnanimi: " + lastName +"<br> Telefoni number: "+ phone + "<br> E-mail: " + email + "<br><br>";
    // registrationsDiv.innerHTML = registrationsData;

    localStorage.setItem("firstname", firstName);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("phone", number);
    localStorage.setItem("email", email);
    
    location.href = "review.html";
}