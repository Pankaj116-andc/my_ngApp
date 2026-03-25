import { Routes } from '@angular/router';
import { ToDoList } from './to-do-list/to-do-list';
import { Counter } from './counter/counter';
import { IfElse } from './if-else/if-else';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { PageNotFOund } from './page-not-found/page-not-found';
import { profile } from 'console';
import { Profile } from './profile/profile';

export const routes: Routes = [
    // {path:'',component:App},
    { path: 'toDo', component: ToDoList },
    { path: 'counter', component: Counter },
    { path: 'ifElse', component: IfElse },
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'profile', component: Profile },
    { path: '**', component: PageNotFOund }
];
