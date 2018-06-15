import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var $: any;


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
  ownerName: string;
  ticketsObj: any;
  tickets: any;
  currentTicket: any;
  temp:string;
  pageNumber: number;
  listLoading: Boolean;

  constructor(private appService: AppService, private httpClient: HttpClient) {
  }

  
  ngOnInit() {
    this.appService.testRoute().subscribe(data => this.ownerName = data['owner']);
    this.getTickets();
  }

    getTickets(){
      this.tickets=null;
      this.listLoading= true;

      if(!this.pageNumber){
        this.pageNumber= 1;
      }
        this.appService.getTickets(this.pageNumber).subscribe(data => {
            this.listLoading= false;
            this.ticketsObj= data;
            console.log('data: ', this.ticketsObj);
            this.tickets= this.ticketsObj.tickets;
        });
    }

    nextPage(){
      this.pageNumber++;
      this.getTickets();
    }

    prevPage(){
      this.pageNumber--;
      this.getTickets();
    }

    openTicket(obj){
      this.currentTicket= obj;
      this.currentTicket.created_at= new Date(this.currentTicket.created_at);
      this.currentTicket.updated_at= new Date(this.currentTicket.updated_at);
      $('#myModal').modal('show');
    }
}
