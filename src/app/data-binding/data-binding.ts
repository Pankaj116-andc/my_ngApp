import { Component, inject, signal } from '@angular/core';
import { Service } from '../service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name = signal('Pankaj');
  userData = signal({
    name: "Pankaj",
    age: 20,
    email: "pankaj@test.com"
  })
  Service = inject(Service);
  userId: number = 0;
  getUser() {
    this.Service.getUserById(this.userId).subscribe((res: any) => {
      debugger;
    })
  }


  constructor() {
    this.Service.$roleBehaviour.subscribe((res: any) => {
      //debugger;
    })
    this.Service.$roleSub.subscribe((res: any) => {
      //debugger
    })
  }


}
