import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-york-times-demo';

  constructor(private router: Router){
      // this.router.navigateByUrl('dashboard')
  }
}
