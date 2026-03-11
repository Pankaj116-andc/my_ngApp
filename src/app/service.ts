import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http: HttpClient) { }

  getJasonUser() {
    tap(userList=>{
      debugger;
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

}
