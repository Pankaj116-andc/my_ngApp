import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { concatMap, forkJoin, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-combine-obs',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-obs.html',
  styleUrl: './combine-obs.css',
})
export class CombineObs {
  stateData$ = of(["Delhi","Maharastra","Bihar","Goa"]);
  cityData$ = of(["Surat","Mumbai","Patna","Pondi"]);

  http = inject(HttpClient);
  searchControl: FormControl = new FormControl();

  constructor(){

    // this.searchControl.valueChanges.subscribe((search:string)=>{
    //   // debugger;
    //   this.http.get("https://dummyjson.com/products/search?q="+search).subscribe((res:any)=>{
    //     console.log("user search"+search)
    //   })
    // })

    // this.searchControl.valueChanges.pipe(
    //   switchMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q="+search))
    // ).subscribe((res:any)=>{
    //   console.log(res)
    // })

    this.searchControl.valueChanges.pipe(
      mergeMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q="+search))
    ).subscribe((res:any)=>{
      console.log(res)
    })

    // this.searchControl.valueChanges.pipe(
    //   concatMap((search:string)=>this.http.get("https://dummyjson.com/products/search?q="+search))
    // ).subscribe((res:any)=>{
    //   console.log(res)
    // })


    const $user = this.http.get("https://jsonplaceholder.typicode.com/users/1")
    const $posts = this.http.get("https://jsonplaceholder.typicode.com/posts")

    forkJoin([$user, $posts]).subscribe((res:any)=>{
      // debugger;
    },error=>{
      // debugger;
    })
    forkJoin([this.stateData$, this.cityData$]).subscribe((res:any)=>{
      // debugger;
    })
    this.cityData$.subscribe((res:any)=>{
      // debugger
    })
    this.stateData$.subscribe((res:any)=>{
      // debugger
    })
  }
}
