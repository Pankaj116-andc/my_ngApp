import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-sub-beh-reply',
  imports: [],
  templateUrl: './sub-beh-reply.html',
  styleUrl: './sub-beh-reply.css',
})
export class SubBehReply implements OnInit {
  studentName$ = new Subject();

  rollNo$ = new Subject<number>();

  Service = inject(Service);



  constructor() {
    setTimeout(() => {
      this.studentName$.next("hiii")
      this.rollNo$.next(21)
      this.Service.$courseDuration.next("28 weeks")
    }, 4000);
    this.studentName$.next("hiii")

  }
  onRoleChange(event:any){
    debugger;
    this.Service.$roleBehaviour.next(event.target.value)
    this.Service.$roleSub.next(event.target.value)
  }

  ngOnInit(): void {
    // this.Service.$courseDuration.subscribe((res:any)=>{
    //   debugger;
    // })
    // this.studentName$.subscribe((res: any) => {
    //   debugger;
    // })
    // this.rollNo$.subscribe((res:number)=>{
    //   debugger;
    // })
    // this.Service.$roleBehaviour.subscribe((res:any)=>{
    //   debugger;
    // })
    // this.Service.$roleSub.subscribe((res:any)=>{
    //   debugger
    // })
  }

  
}
