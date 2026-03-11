import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  name = signal('Pankaj');

  userData = signal({
    name : "Pankaj",
    age : 20,
    email : "pankaj@test.com"
  })
}
