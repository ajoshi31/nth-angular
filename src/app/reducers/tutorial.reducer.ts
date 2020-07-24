import {Action} from '@ngrx/store'
import {Tutorial} from '../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'

// This data can be derived from api
const initialState: Tutorial[] = [{
  name: 'Initial Tutorial',
  url: 'http://google.com'
}, {
  name: 'second Tutorial',
  url: 'http://google.com'
}];

let rem: Tutorial[];

export function reducer(state: Tutorial[] = initialState, action: TutorialActions.Actions) {
  console.log(action.payload);
  switch (action.type) {
    case  TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload]; // spread operator to add new data to origin al value
    // Add this case:
    case TutorialActions.REMOVE_TUTORIAL: {
      const index: number = <number>action.payload;
      if (index !== -1) {
        rem = state.filter((_, i) => i !== index);
        return rem;
      }
      return state;
    }
    default:
      return state;
  }
}
