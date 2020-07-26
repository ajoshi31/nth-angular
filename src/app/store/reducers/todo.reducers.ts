import * as TodoActions from '../actions/todo.actions';
import {IToDoState} from "../state/todo.state";
import {ITodo} from "../../models/todo";
import {createEntityAdapter, EntityState, EntityAdapter} from '@ngrx/entity';

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
    case TodoActions.TodoActionTypes.LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action['payload']
      };
    }
    case TodoActions.TodoActionTypes.REMOVE: {
      const itemId: number = <number>action['payload'];
      const index: number = state['todos'].findIndex(x => x.id === itemId);
      let rem: ITodo[];
      if (index !== -1) {
        rem = state.todos.filter((_, i) => i !== index);
        return {
          ...state,
          todos: rem
        };
      }
      return state;
    }
    default:
      return state;
  }
}


