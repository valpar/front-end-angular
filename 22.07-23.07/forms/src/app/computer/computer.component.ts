import { Component, OnInit } from '@angular/core';
import { ComputerService } from './computer.service';
import { Computer } from './computer.model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  computers: Computer[];

  constructor(private ComputerService: ComputerService) { }

  ngOnInit(): void {
    this.computers = this.ComputerService.computers;
  }

  onSubmit(computerForm: NgForm): void {
    var computerFormValue = computerForm.value;

    var computer = new Computer(
      computerFormValue.producer,
      computerFormValue.model,
      computerFormValue.processor,
      computerFormValue.ram,
      computerFormValue.op,
      computerFormValue.graphics_card,
    );
  this.ComputerService.addComputer(computer);
  this.computers =  this.ComputerService.computers;
  }
}
