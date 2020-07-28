import { Injectable } from '@angular/core';
import { Computer } from './computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers: Computer[] = [new Computer(
    "Dell",
    "XPS 13",
    "Intel® Core™ i7-8565U",
    "8 GB",
    "Windows 10 home",
    "Intel® UHD Graphics 620" ),
    new Computer(
      "Acer",
      "Model 2",
      "Intel i5",
      "16 GB",
      "Windows 10 pro",
      "Nvidia geforce 1050GTX" ),
  ]

  constructor() { }

  addComputer(computer: Computer): void {
    this.computers.push(computer);
  }

  removeComputer(i: number):void {
    this.computers.splice(i,1);
  }

  editComputer(computer: Computer, id: number): void  {
    this.computers[id] = computer;
  }

  getComputer(id: number): Computer {
    return this.computers[id];
  }

  getComputers(): Computer[] {
    return this.computers.slice();
  }
}
