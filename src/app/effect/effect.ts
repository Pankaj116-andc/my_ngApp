import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  speed = signal(0)
  color =  'black'
  incSpeed(){
    this.speed.set(this.speed()+10)
  }
  constructor(){
    effect(()=>{
      if(this.speed() > 0 && this.speed() <70 ){
        this.color = 'green'
      }
    })
    effect(()=>{
      if(this.speed() >= 70 && this.speed() < 130 ){
        this.color = 'orange'
      }
    })
    effect(()=>{
      if(this.speed() > 120 ){
        this.color = 'red'
      }
    })
    
  }
}
