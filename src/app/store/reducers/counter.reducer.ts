import {Counter} from '../models/counter.model'
import * as CounterActions from './../actions/counter.actions'

export const initialCounterState: Counter = {
  counter: 0
};

export function counterReducer(state: Counter = initialCounterState, action: CounterActions.Actions) {
  switch (action.type) {
    case CounterActions.INCREMENT:
      let counter = state.counter;
      counter++;
      return {
        counter
      };

    case CounterActions.DECREMENT:
      let counterD = state.counter;
      if (counterD !== 0) {
        counterD--;
      }
      return {
        counter: counterD
      };
    default:
      return state;
  }
}
