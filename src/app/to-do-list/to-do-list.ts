import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
  task =''
  taskList: {id: number, task: string}[] = []
  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task=''
  }
  deleteTask(taskId:number, task:string){
    this.taskList = this.taskList.filter((item)=>item.id!=taskId)
  }
}
