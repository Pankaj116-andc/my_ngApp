import { Component } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  imports: [],
  templateUrl: './click-counter.html',
  styleUrl: './click-counter.css',
})
export class ClickCounter {
  count :number = 0;
  decrement(){
    this.count--;
  }
  reset(){
    this.count=0;
  }
  increment(){
    this.count++;
  }
}
