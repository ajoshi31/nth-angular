import {Action} from '@ngrx/store';
import ITodo from './../../models/todo'

export enum TodoActionTypes {
  ADD = '[TODO] Add to list',
  REMOVE = '[TODO] Remove from list',
  LOAD_TODOS = '[TODO] Load items from server',
  LOAD_TODOS_SUCCESS = '[TODO] Load success'
}

export class AddTodo implements Action {
  readonly type = <string>TodoActionTypes.ADD;

  constructor(public payload: ITodo) {
  }
}

export class RemoveTodo implements Action {
  readonly type = <string>TodoActionTypes.REMOVE;

  constructor(public payload: ITodo) {
  }
}

export class GetTodos implements Action {
  readonly type = <string>TodoActionTypes.LOAD_TODOS;
}

export class GetTodoSuccess implements Action {
  readonly type = <string>TodoActionTypes.LOAD_TODOS_SUCCESS;

  constructor(public payload: ITodo[]) {
  }
}

export type TodoActions = AddTodo | RemoveTodo | GetTodos | GetTodoSuccess;
