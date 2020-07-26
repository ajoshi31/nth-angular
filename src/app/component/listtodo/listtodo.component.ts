import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-listtodo',
  templateUrl: './listtodo.component.html',
  styleUrls: ['./listtodo.component.scss']
})
export class ListtodoComponent implements OnInit {


  constructor(private _todoService: TodoService) {
  }

  todos: any;
  subs: Subscription;

  ngOnInit(): void {
    this.subs = this._todoService.getTodos()
      .subscribe((res: any) => {
          this.todos = res;
        },
      );
  }

}
