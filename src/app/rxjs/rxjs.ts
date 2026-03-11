import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, Observable, of, take, timer } from 'rxjs';
import { Service } from '../service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs {

  cityList: string[] = ["New Delhi", "Pune", "Mumbai"]
  cityList$ = of(["New Delhi", "Pune", "Mumbai"])
  cityList2$ = from(["New Delhi", "Pune", "Mumbai"])
  // interval$ = interval(1000)
  // timer$ = timer(5000)

  numList$ = from([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
  rollList$ = of([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])

  masterService = inject(Service)

  timeInterval = interval(1000);

  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges.pipe(
      filter(search=>search.length >=3)
    ).subscribe((res:any)=>{
      console.log(res)
    })
    
    // this.timeInterval.pipe(
    //   take(10),
    //   filter(num=>num%2==0)
    // ).subscribe((res:Number)=>{
    //   console.log(res)
    // })

    // this.masterService.getSingalUser().subscribe((res:any)=>{
    //   console.log(res)
    // })

    // this.masterService.getJasonUser().subscribe((res:any)=>{
    //   console.log(res)
    // });
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    //   console.log(res)
    // })
    
    // this.numList$.pipe(
    //   filter(num => num % 2 != 0)
    // ).subscribe((res:number) => {
    //   console.log(res)
    // });

    // this.rollList$.pipe(
    //   map(result => result.filter(m => m%2!=0))
    // ).subscribe((res:Number[])=>{
    //   console.log(res)
    // });

    // // this.timer$.subscribe((res:number)=>{
    // //   console.log("Timer "+res)
    // // })
    // // this.interval$.subscribe((res:number)=>{
    // //   console.log("Interval "+res)
    // // })

    // this.cityList$.subscribe((cityData: string[])=>{
    //   // debugger;
    //   console.log(cityData)
    // });

    // this.cityList2$.subscribe((res:string)=>{
    //   // debugger;
    //   console.log(res)
    // })

    // const myObs$ = new Observable(value => {
    //   value.next("This is demo message");
    // });

    // myObs$.subscribe(message => {
    //   // debugger;
    //   console.log(message)
    // });
  }



}
