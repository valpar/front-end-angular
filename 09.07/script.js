console.log("tere");

// document - käib läbi HTMLi
document.getElementById("clock");

//logime välja konsooli hello HTML elemendi
console.log(document.getElementById("clock"));

//paneme eraldi muutujasse
var clockHtmlElement = document.getElementById("clock");

//täpselt sama väljalogimine nagu eelnevalt välja toodud
console.log(clockHtmlElement);

//innerHTMLiga muudame htmli sisest väärtust
clockHtmlElement.innerHTML = "tere tulemast";