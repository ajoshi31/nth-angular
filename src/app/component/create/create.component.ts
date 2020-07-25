import {Component, OnInit} from '@angular/core';
import {TutorialState} from "../../app.state";
import * as TutorialActions from './../../store/actions/tutorial.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<TutorialState>) {
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  ngOnInit() {
  }

}
