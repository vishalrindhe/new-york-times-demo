import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-below-carousel',
  templateUrl: './below-carousel.component.html',
  styleUrls: ['./below-carousel.component.scss']
})
export class BelowCarouselComponent implements OnInit {

  @Input() info: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {

}

}
