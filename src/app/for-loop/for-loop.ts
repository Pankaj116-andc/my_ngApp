import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  users = signal(['Abhinav','Ayush','Utkarsh','Pankaj'])
  usersData = signal([
    {id:1, name:"Abhinav", surname:"Saxena", email:"Saxena@test.com"},
    {id:2, name:"Utksrsh", surname:"Bajpai", email:"Bajpai@test.com"},
    {id:3, name:"Ayush", surname:"Thakur", email:"Thakur@test.com"},
    {id:4, name:"Pankaj", surname:"Kumar", email:"Kumar@test.com"}
  ])
}
