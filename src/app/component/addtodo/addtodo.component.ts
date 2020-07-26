import {Component, OnInit} from '@angular/core';
import {IToDoState} from "../../store/state/todo.state";
import {Store} from "@ngrx/store";
import * as TodoActions from "../../store/actions/todo.actions";
import {ITodo} from "../../models/todo";

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  constructor(private store: Store<IToDoState>) {
  }

  ngOnInit(): void {
  }

  addTodo(title, desc) {
    this.store.dispatch(new TodoActions.AddTodo({id: 0, title: title, desc: desc, status: true}))
  }


}
