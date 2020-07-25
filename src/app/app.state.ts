import {Tutorial} from './store/models/tutorial.model';
import {Counter} from "./store/models/counter.model";

export interface TutorialState {
  readonly tutorial: Tutorial[];
}

export interface CounterState {
  readonly counter: Counter;
}
