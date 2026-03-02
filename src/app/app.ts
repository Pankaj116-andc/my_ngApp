import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { sign } from 'node:crypto';
import { ClickCounter } from './click-counter/click-counter';
import { Signal } from "./signal/signal";
import { GetSet } from './get-set/get-set';
import { IfElse } from "./if-else/if-else";
import { Effect } from './effect/effect';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [ClickCounter, Signal, GetSet, IfElse, Effect, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_ngApp');
  
}
