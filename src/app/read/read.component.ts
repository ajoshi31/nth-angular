import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {Tutorial} from "../models/tutorial.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorials');
  }

  ngOnInit(): void {
  }

}
