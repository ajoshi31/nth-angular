import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {IToDoState} from "../state/todo.state";

export const initialState: IToDoState = {
  todos: [],
  selectedToDo: null
};

export function TodoReducer(state = initialState, action: TodoActions) {
  switch (action.type) {
    case TodoActionTypes.LOAD_TODOS_SUCCESS:
      return {
        ...state,
        items: []
      };

    case TodoActionTypes.ADD:
      return {
        ...state
      };

    case TodoActionTypes.REMOVE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
