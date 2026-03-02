import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sign } from 'node:crypto';
import { ClickCounter } from './click-counter/click-counter';
import { Signal } from "./signal/signal";
import { GetSet } from './get-set/get-set';
import { IfElse } from "./if-else/if-else";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClickCounter, Signal, GetSet, IfElse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_ngApp');
  
}
