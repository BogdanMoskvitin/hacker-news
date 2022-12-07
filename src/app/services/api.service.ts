import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = environment.api_url;

  constructor(private http: HttpClient) {}

  getFrontPage() {
    return this.http.get(this.api + '/search?tags=front_page');
  }

  getPage(page: number) {
    return this.http.get(this.api + `/search?page=${page}`);
  }

  getComment() {
    return this.http.get(this.api + '/search?tags=comment')
  }
}
