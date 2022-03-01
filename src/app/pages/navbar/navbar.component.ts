import { DataService } from 'src/app/service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  endDate:any = '2022-03-01T08:11:22-05:00'
  currentDate = new Date();
  now:number= 0;

    constructor(public data:DataService) {
        setInterval(() => {
          this.now = Date.now();
        }, 1);
    }

  ngOnInit(): void {

     
    
  }
 

}
