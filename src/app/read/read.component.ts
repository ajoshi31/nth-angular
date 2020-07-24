import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {Tutorial} from "../models/tutorial.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
    console.log(this.tutorials);
  }

  ngOnInit(): void {
  }

  // In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}
