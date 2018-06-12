import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App!!';
  msg: string;
  tickets:JSON;
  temp:string;

  constructor(private appService: AppService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.appService.testRoute().subscribe(data => this.msg = data['msg']);
  }

//   getTickets() {
//     this.httpClient.get('http://127.0.0.1:5002/tickets').subscribe(data => {
//       this.tickets = data as JSON;
//       console.log('ticket data: ', this.tickets);
//     })
//   }

// getTickets() {
//         console.log('inside get tickets');
//         this.httpClient.get('/api/temp').subscribe(data => {
//             this.temp = data as JSON;
//           console.log('temp data: ', this.temp);
//         })
//       }

    getTickets(){
        this.appService.getTickets().subscribe(data => {
            this.tickets= data as JSON;
            console.log('ticket data: ', this.tickets);
        });
    }
}
