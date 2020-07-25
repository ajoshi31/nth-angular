import {Tutorial} from '../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'
import {TutorialState} from "../../app.state";

const initialState: Tutorial[] = [{
  name: 'Initial Tutorial',
  url: 'http://google.com'
}, {
  name: 'second Tutorial',
  url: 'http://google.com'
}];

let rem: Tutorial[];

export function tutorialReducer(state: Tutorial[] = initialState, action: TutorialActions.Actions): TutorialState {
  switch (action.type) {
    case  TutorialActions.ADD_TUTORIAL:
      return {
        tutorial: [...state, action.payload]
      }; // spread operator to add new data to origin al value
    case TutorialActions.REMOVE_TUTORIAL: {
      const index: number = <number>action.payload;
      if (index !== -1) {
        rem = state.filter((_, i) => i !== index);
        return {
          tutorial: rem
        };
      }
      return {
        tutorial: state
      };
    }
    default:
      return {
        tutorial: state
      };
  }
}
