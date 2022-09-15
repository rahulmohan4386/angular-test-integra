import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'http-client';
  data: {
    id: string;
    name: string;
    email: string;
    gender: string;
    status: string;
  }[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.fetchApi();

    this.httpService.data.subscribe((dataIn) => {
      this.data = dataIn;
    });
  }
}
