import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  data = new Subject<any>();

  constructor(private http: HttpClient) {}

  fetchApi = () => {
    this.http
      .get('https://gorest.co.in/public/v2/users', {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((data) => {
        this.data.next(data);
      });
  };
}
