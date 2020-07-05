var clockHtmlElement = document.getElementById("clock");
console.log(clockHtmlElement);

//masiiv list. Elemendid hakkavas 0-st. Täidame ise muutuja andmetega (enne funktsioonide kaudu)
var estonianMonths = ["Jaanuar","Veebraur","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
var estoniaWeekdays = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
//uus kuupäev   
var date = new Date();
clockHtmlElement.innerHTML = date;

//muutujasse paneme date. funktsiooniga saadud vastused
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var dayOfWeek = date.getDay();//-1 ei saa siin kasutada, ütleb "-1 päev nädalas" ja nädalapäev on "undefined"
var hour = date.getHours();
if (hour<10 ){
    hour = "0" + hour;
}
var minute = date.getMinutes();
if (minute<10 ){
    minute = "0" + minute;
}
var second = date.getSeconds();
if (second<10 ){
    second = "0" + second;
};
//sisestame HTMLi
clockHtmlElement.innerHTML = "<b>" + estoniaWeekdays[dayOfWeek] + "</b><br>" + day + "."  + estonianMonths[month] + "." + year + "<br>" + dayOfWeek + " päev nädalas"  + "<br>" + hour + ":" + minute + ":" + second;

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(dayOfWeek);
// console.log(hour);
// console.log(minute);
// console.log(second);

}