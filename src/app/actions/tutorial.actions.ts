import {Injectable} from '@angular/core'
import {Action} from '@ngrx/store'
import {Tutorial} from '../models/tutorial.model'

// Defining the type of action which is in form of string constant
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// Section 3
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {
  }
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {
  }
}

export type Actions = AddTutorial | RemoveTutorial
