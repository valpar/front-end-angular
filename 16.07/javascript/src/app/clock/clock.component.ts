import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var clockHtmlElement = document.getElementById("clock");
    var estonianMonths = ["Jaanuar","Veebraur","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
    var estoniaWeekdays = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];

    updateClock();
    setInterval(updateClock, 1000);

    function updateClock() {
    var date = new Date();
    clockHtmlElement.innerHTML = date.toDateString();

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var dayOfWeek = date.getDay();
    var hour = date.getHours();

    if (hour<10 ){
        hour = (Number) ("0" + hour);
    }
    var minute = date.getMinutes();
    if (minute<10 ){
        minute = (Number) ("0" + minute);
    }
    var second = date.getSeconds();
    if (second<10 ){
        second = (Number) ("0" + second);
    };

    clockHtmlElement.innerHTML = "<b>" + estoniaWeekdays[dayOfWeek] + "</b><br>" + day + "."  + estonianMonths[month] + "." + year + "<br>" + dayOfWeek + " päev nädalas"  + "<br>" + hour + ":" + minute + ":" + second;
    }

  }

}
