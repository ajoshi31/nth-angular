import {Action} from '@ngrx/store'

export const INCREMENT = '[COUNTER] Increase';
export const DECREMENT = '[COUNTER] Decrease';


export enum CounterActionTypes {
  INCREMENT = '[COUNTER] Increase',
  DECREMENT = '[COUNTER] Decrease'
}

export class CounterIncrement implements Action {

  readonly type = <string>CounterActionTypes.INCREMENT;

  constructor(public payload: number) {
  }
}

export class CounterDecrement implements Action {
  readonly type = <string>CounterActionTypes.DECREMENT;

  constructor(public payload: number) {
  }
}

export type Actions = CounterIncrement | CounterDecrement
