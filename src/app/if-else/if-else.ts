import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  display = true;
  toggle(){
    this.display=!this.display
  }
  show=true;
  toggleTwodiv(){
    this.show=!this.show
  }
}
