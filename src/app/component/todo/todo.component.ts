import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {ITodo} from "../../models/todo";
import {IAppState} from "../../store/state/index";
import {select, Store} from "@ngrx/store";
import {selectTodoList} from "../../store/selectors/todo.selector";
import {GetTodos, RemoveTodo, ToggleDone} from "../../store/actions/todo.actions";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: ITodo;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
  }

  delTutorial(id) {
    this.store.dispatch(new RemoveTodo(id))
  }

  toggleTodo(id, status) {
    this.store.dispatch(new ToggleDone({id: id, status: !status}))
  }
}
