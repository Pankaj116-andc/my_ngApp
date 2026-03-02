import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
  name: string = ""
  displayName:string=''
  email:string=''
  
  // setName(event:Event){
  //   this.name = (event.target as HTMLInputElement).value
  // }
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value
  }
  showName(){
    this.displayName=this.name
  }
  setName(){
    this.name = 'Ram'
  }
  getEmail(val:string){
    console.log(val)
    this.email=val
  }
  setEmail(){
    this.email='deafault@gamil.com'
  }
}
