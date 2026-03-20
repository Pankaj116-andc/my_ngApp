import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { sign } from 'node:crypto';
import { ClickCounter } from './click-counter/click-counter';
import { Signal } from "./signal/signal";
import { GetSet } from './get-set/get-set';
import { IfElse } from "./if-else/if-else";
import { Effect } from './effect/effect';
import { Counter } from './counter/counter';
import { ForLoop } from './for-loop/for-loop';
import { DataBinding } from './data-binding/data-binding';
import { Rxjs } from './rxjs/rxjs';
import { SubBehReply } from './sub-beh-reply/sub-beh-reply';
import { CombineObs } from './combine-obs/combine-obs';
import { RxjsReactiveForm } from './rxjs-reactive-form/rxjs-reactive-form';
import { Unsubscribe } from './unsubscribe/unsubscribe';
import { ToDoList } from './to-do-list/to-do-list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet,ToDoList,Counter,IfElse,ClickCounter,Signal,GetSet,Effect,ForLoop,DataBinding,Rxjs,SubBehReply,CombineObs,RxjsReactiveForm,Unsubscribe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_ngApp');
  
}
