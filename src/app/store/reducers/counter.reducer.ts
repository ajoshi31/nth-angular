import * as CounterActions from './../actions/counter.actions'
import {CounterState} from "../../app.state";
import {createSelector} from "@ngrx/store";

export const initialCounterState: CounterState = {
  counter: {
    counter: 0
  }
};

export function counterReducer(counterState: CounterState = initialCounterState, action: CounterActions.Actions): CounterState {
  switch (action.type) {
    case CounterActions.INCREMENT:
      let counterI = counterState.counter.counter;
      counterI++;

      return <CounterState>{
        counter: {
          counter: counterI
        }
      };

    case CounterActions.DECREMENT:
      let counterD = counterState.counter.counter;
      if (counterD !== 0) {
        counterD--;
      }
      return <CounterState>{
        counter: {
          counter: counterD
        }
      };
    default:
      return counterState;
  }
}

// Selector
export const selectCounterState = state => state.counterState;
export const selectCounter = createSelector(selectCounterState, counterState => counterState.counter);
