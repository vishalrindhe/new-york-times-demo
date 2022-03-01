import { DataService } from './../../service/data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {
  list =[1,2,3,4]
  @Input() info: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    // this.data.topStoriesArts().subscribe((info: any) => {
    //   this.info = info
    //   console.log(this.info);
    // })

  }

}
