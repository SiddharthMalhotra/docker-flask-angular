import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// interface ticketsInterface {
//   tickets: Array<any>
// }

export class AppComponent implements OnInit {
  title = 'App!!';
  ownername: string;
  ticketsObj: any;
  tickets: any;
  temp:string;
  page_number: number;

  constructor(private appService: AppService, private httpClient: HttpClient) {
  }

  
  ngOnInit() {
    this.appService.testRoute().subscribe(data => this.ownername = data['owner']);
    this.getTickets();
  }

    getTickets(){

      if(!this.page_number){
        this.page_number= 1;
      }
        this.appService.getTickets(this.page_number).subscribe(data => {
            this.ticketsObj= data;
            console.log('data: ', this.ticketsObj);
            this.tickets= this.ticketsObj.tickets;
        });
    }

    nextPage(){
      this.page_number++;
      this.getTickets();
    }

    prevPage(){
      this.page_number--;
      this.getTickets();
    }
}
