import {ActionReducerMap} from "@ngrx/store";
import {tutorialReducer} from "./tutorial.reducer";
import {counterReducer} from "./counter.reducer";
import {CounterState, TutorialState} from '../../app.state'

export interface AppState {
  tutorialState: TutorialState;
  counterState: CounterState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  tutorialState: tutorialReducer,
  counterState: counterReducer
};
