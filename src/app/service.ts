import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  

  $courseDuration = new BehaviorSubject<string>("3 months");

  $roleBehaviour = new BehaviorSubject<string>("");

  $roleSub = new Subject<string>();

  private userDetails = new Map<number, Observable<any>>();

  constructor(private http: HttpClient) { }

  getJasonUser() {
    tap(userList=>{
      //debugger;
    })
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      }))
    );
  }

  getSingalUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/2').pipe(
      map((userData:any)=> userData.address)
    )
  }
  
  getUserById(id: number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }

}
