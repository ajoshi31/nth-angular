import {Tutorial} from '../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'
import {TutorialState} from "../../app.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "index";

const initialState: TutorialState = {
  tutorial: [{
    name: 'Initial Tutorial',
    url: 'http://google.com'
  }, {
    name: 'second Tutorial',
    url: 'http://google.com'
  }]
};

let rem: Tutorial[];

export function tutorialReducer(tutorialState: TutorialState = initialState, action: TutorialActions.Actions): TutorialState {
  switch (action.type) {
    case  TutorialActions.ADD_TUTORIAL:
      return {
        tutorial: [...tutorialState.tutorial, action.payload]
      };
    case TutorialActions.REMOVE_TUTORIAL: {
      const index: number = <number>action.payload;
      if (index !== -1) {
        rem = tutorialState.tutorial.filter((_, i) => i !== index);
        return {
          tutorial: rem
        };
      }
      return tutorialState;
    }
    default:
      return tutorialState;
  }
}

// Selector
export const selectTutorialState = (b: AppState) => b.tutorialState;

export const selectTutorial = createSelector(
  selectTutorialState,
  (state: TutorialState) => state.tutorial
);
