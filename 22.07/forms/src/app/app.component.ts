import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cats: {breed: string, name: string, picture: string}[] = [];
  title = 'Forms angular';
  number: number;
  randomNumbers = [];

  onSubmitform(form: NgForm) {
    //console.log(form) kogu vorm
    //console.log(form.value)  vormi kõik väärtused
    //console.log(form.value.breed) vormi spetsiifiline väärtus

    let cat = form.value;
    this.cats.push(cat);
  }


  onGenerate() {
    this.number = Math.ceil(Math.random() * (99 - 10) + 10); // ceil ümardab täisarvuks
    console.log(this.number);

    this.randomNumbers.push(this.number);
  }

  onDelete(i) {
    this.randomNumbers.splice(i,1);
  }
}
