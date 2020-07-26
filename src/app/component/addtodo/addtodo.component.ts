import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as TodoActions from "../../store/actions/todo.actions";
import {ITodo} from "../../models/todo";
import {Observable, Subscription} from "rxjs/index";
import {selectTodoList} from "../../store/selectors/todo.selector";
import {IAppState} from "../../store/state/index";

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {

  nextId: number;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
  }

  addTodo(title, desc) {

    // The id has to be generated after getting the success from API here we are just using state management check
    // and create random id at client side

    //noinspection TypeScriptValidateTypes
    this.store.pipe(select(selectTodoList)).subscribe(data => {
      this.nextId = data.length + 1;
    }).unsubscribe();
    this.store.dispatch(new TodoActions.AddTodo({id: this.nextId, title: title, desc: desc, status: false}));
  }

}

