import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  data = 0;
  count = signal(0);

  constructor() {
    effect(() => {
      console.log('Effect triggered with signal:', this.count());
      console.log('Effect triggered with data:', this.data);
      if (this.count() > 10) {
        console.log('Count exceeded 10, resetting to 0');
        this.count.set(0);
      }
    })
  }

  updateData() {
    this.data++;
    // console.log('Updating data to:', this.data);
  }
  updateSignal() {
    // console.log('Updating signal with signal:', this.count());
    this.count.set(this.count() + 1);
  }

  height = signal(20);
  width = signal(10);
  area = computed(()=> this.height() * this.width())
  update() {
    this.width.set(this.width()+10)
  }
}
