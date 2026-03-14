import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { subscribe } from 'diagnostics_channel';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-rxjs-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './rxjs-reactive-form.html',
  styleUrl: './rxjs-reactive-form.css',
})
export class RxjsReactiveForm implements OnInit {
  userForm!: FormGroup;
  passwordMismatch = false;
  searchResults: string[] = [];

  searchControl: FormControl = new FormControl('ABC')

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: [''],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      age: [''],
      drivingLicense: [''],
      country: [''],
      currency: [''],
      search: ['']
    });
    
  }
  ngOnInit():void{
    this.userForm.controls['confirmPassword'].disable();
    this.userForm.controls['name'].valueChanges.subscribe((res:string)=>{
      //debugger;
    })
    this.searchControl.valueChanges.subscribe((searchText:any)=>{
      console.log("searchText "+searchText)
    })
    this.userForm.valueChanges.subscribe((res:any)=>{
      // debugger;
    })
    this.userForm.controls['password'].valueChanges.subscribe((res:any)=>{
      if(res != ''){
        this.userForm.controls['confirmPassword'].addValidators([Validators.required])
        this.userForm.controls['confirmPassword'].enable();
      }
    })
    this.userForm.statusChanges.subscribe((res:any)=>{
      // debugger;
    })

    combineLatest([
      this.userForm.controls['password'].valueChanges,
      this.userForm.controls['confirmPassword'].valueChanges
    ]).subscribe(([pwd,confirmPwd])=>{
      this.passwordMismatch = pwd && confirmPwd && pwd !== confirmPwd
      // console.log(this.passwordMismatch)
    })
  }
  onSubmit(){

  }
}
