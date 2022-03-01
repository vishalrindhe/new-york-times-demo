import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentDate = new Date();
  now:number= 0;

    constructor() {
        setInterval(() => {
          this.now = Date.now();
        }, 1);
    }

  ngOnInit(): void {
  }

}
