import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form: {firstname:string, lastname:string, phone:string, email:string};

  constructor() { }
}
