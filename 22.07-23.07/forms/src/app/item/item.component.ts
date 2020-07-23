import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
    form.reset();
  }

  onGenerate() {
    this.number = Math.ceil(Math.random() * (99 - 10) + 10); // ceil ümardab täisarvuks
    console.log(this.number);

    this.randomNumbers.push(this.number);
  }

  onDelete(i) {
    this.randomNumbers.splice(i,1);
  }

  onDeleteCat(i) {
    this.cats.splice(i,1);
  }

}
