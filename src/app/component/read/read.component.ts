///<reference path="../../store/reducers/tutorial.reducer.ts"/>
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";

import {TutorialState} from "../../app.state";
import {select, Store} from "@ngrx/store";
import * as TutorialActions from './../../store/actions/tutorial.actions';
import {Tutorial} from "../../store/models/tutorial.model";
import {selectTutorial} from "../../store/reducers/tutorial.reducer";


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {


  tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<TutorialState>) {
    this.tutorials$ = store.pipe(select(selectTutorial));
  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}
