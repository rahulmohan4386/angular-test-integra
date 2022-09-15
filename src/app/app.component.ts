import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'http-client';
  searchKeyword = '';
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus odio, posuere quis accumsan at, aliquet in nibh. Morbi tempor rhoncus hendrerit. Sed gravida porttitor congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec rhoncus mi eget semper cursus. Morbi lectus odio, ullamcorper sit amet dignissim a, faucibus sit amet risus. In tincidunt ultricies ex, sit amet vehicula purus blandit nec.';
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
