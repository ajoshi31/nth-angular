import {ActionReducerMap} from "@ngrx/store";
import {tutorialReducer} from "./tutorial.reducer";
import {counterReducer} from "./counter.reducer";
import {CounterState, TutorialState} from '../../app.state'

interface AppState {
  tutorialState: TutorialState;
  counterState: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  tutorialState: tutorialReducer,
  counterState: counterReducer
};
