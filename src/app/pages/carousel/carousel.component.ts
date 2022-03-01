import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() info: any;

  sliceData:any

  constructor(private data: DataService) { }

  ngOnInit(): void {
    // this.data.topStoriesArts().subscribe((info: any) => {
    //   this.info = info
    //   console.log(this.info);
      // this.sliceData = info.results.slice(1,5)

      // this.spinner.hide();
    // })
  }



}
