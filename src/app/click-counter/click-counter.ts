import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  imports: [],
  templateUrl: './click-counter.html',
  styleUrl: './click-counter.css',
})
export class ClickCounter {
  count: WritableSignal<number> = signal(0);
  decrement(){
    this.count.set(this.count() - 1);
  }
  reset(){
    this.count.set(0);
  }
  increment(){
    this.count.set(this.count() + 1);
  }
}
