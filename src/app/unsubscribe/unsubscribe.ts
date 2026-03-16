import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe implements OnInit, OnDestroy {
  userList: any[] = [];
  http = inject(HttpClient);
  //way-1
  subscription!: Subscription;

  //way-2
  subscriptionList: Subscription[] = [];

  //way-3
  subTakeUntil!: Subject<void>;

  //way-4 take

  //way-5 async pipe
  userList$ = new Observable<any[]>;

  ngOnInit() {
    // this.getUser();
    this.userList$ = this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
    // this.getPosts();
  }
  // getUser() {
  //   this.subscription = this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
  //     this.userList = res;
  //   })
  // }

  // getUser() {
  //   this.subscriptionList.push(this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
  //     this.userList = res;
  //   }))
  // }

  // getPosts(){
  //   const sub = this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{

  //   })
  //   this.subscriptionList.push(sub)
  // }

  // getUser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
  //     takeUntil(this.subTakeUntil)
  //   ).subscribe((rea:any)=>{
      
  //   })
  // }

  // getUser(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
  //     take(1)
  //   ).subscribe((rea:any)=>{
      
  //   })
  // }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    // this.subscriptionList.forEach(sub=>{
    //   sub.unsubscribe();
    // })
    // this.subTakeUntil.unsubscribe();
  }

}
