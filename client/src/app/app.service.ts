import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {
  }

  testRoute() {
    return this.http.get('/api/ping');
  }

  getTickets(page_number) {
    return this.http.get('/api/tickets?page='+ page_number)
  }

}
