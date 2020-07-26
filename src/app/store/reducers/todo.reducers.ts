import * as TodoActions from '../actions/todo.actions';
import {IToDoState} from "../state/todo.state";

export const initialState: IToDoState = {
  todos: []
};

export function TodoReducer(state: IToDoState = initialState, action: TodoActions.TodoActions): IToDoState {
  switch (action.type) {
    case TodoActions.TodoActionTypes.ADD:
      return {
        ...state,
        todos: [...state.todos, action['payload']]
      };
    default:
      return state;
  }
}


