import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AddtodoComponent} from './component/addtodo/addtodo.component';
import {ListTodoComponent} from './component/listtodo/listtodo.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {TodoComponent} from './component/todo/todo.component';
import {TodoService} from "./services/todo.service";
import {reducers} from "./store/reducers/index";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    ListTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
