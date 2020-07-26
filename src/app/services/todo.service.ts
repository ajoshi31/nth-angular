import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get(this.apiUrl);
  }
}
