import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=3";

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get(this.apiUrl);
  }
}
