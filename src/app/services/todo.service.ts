import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {

  apiUrl = "http://localhost:4000/todos";

  constructor(private http: HttpClient) {
  }

  getTodos() {
    return this.http.get(this.apiUrl);
    return this.http.get('http://localhost:4000/todos');
  }
}
