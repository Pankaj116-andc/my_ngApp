import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
// import { Router } from 'express';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router:Router){}
  goToProfile(name:string){
    this.router.navigate(['/profile'],{queryParams:{name}})
  }
}
