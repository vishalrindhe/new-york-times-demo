import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-side-bar-to-carousel',
  templateUrl: './side-bar-to-carousel.component.html',
  styleUrls: ['./side-bar-to-carousel.component.scss']
})
export class SideBarToCarouselComponent implements OnInit {

  @Input() info: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    // this.data.topStoriesArts().subscribe((info: any) => {
    //   this.info = info
    //   console.log(this.info);
    // })

}
}
