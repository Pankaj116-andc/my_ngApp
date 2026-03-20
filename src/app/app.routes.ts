import { Routes } from '@angular/router';
import { ToDoList } from './to-do-list/to-do-list';
import { Counter } from './counter/counter';
import { IfElse } from './if-else/if-else';
import { App } from './app';

export const routes: Routes = [
    {path:'',component:App},
    {path:'toDo',component:ToDoList},
    {path:'counter',component:Counter},
    {path:'ifElse',component:IfElse},
];
