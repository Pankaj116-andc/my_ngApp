import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count : WritableSignal<number> = signal(0)
  handleReset(){
    this.count.set(0)
  }
  handleInc(){
    this.count.set(this.count()+1)
  }
  handleDec(){
    if(this.count() > 0)(
      this.count.set(this.count()-1)
    )
  }
}
