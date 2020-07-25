import {Component, OnInit} from '@angular/core';
import {CounterState} from "../../app.state";
import {select, Store} from "@ngrx/store";
import * as CounterAction from './../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter: number;

  constructor(private store: Store<CounterState>) {
    // noinspection TypeScriptValidateTypes
    this.store.pipe(select('counter')).subscribe(counter => {
      this.counter = counter.counter;
    });
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(new CounterAction.CounterIncrement(this.counter));
  }

  decrement() {
    this.store.dispatch(new CounterAction.CounterDecrement(this.counter));
  }

}
