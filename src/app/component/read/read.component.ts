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

    // noinspection TypeScriptValidateTypes
    this.tutorials$ = store.pipe(select(selectTutorial));
  }

  ngOnInit(): void {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}

//REF
//https://stackblitz.com/edit/angular-ngrx-tryout?file=src%2Fapp%2Fstore%2Freducers%2Fuser.reducer.ts
//https://stackoverflow.com/questions/51244192/memoizedselector-is-not-assignable-to-parameter-of-type-string/51244533
