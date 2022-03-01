import { DataService } from './../../service/data.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  info: any;
  isShow!: boolean;
  topPosToStartShowing = 100;
  menuValue='home'
  topStoryData:any
  constructor(private data: DataService, private spinner: NgxSpinnerService,private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    // this.spinner.show();
    this.addItem('home');
    this.data.topStoriesArts().subscribe((info: any) => {
      this.info = info
      console.log(this.info);
      // this.spinner.hide();
    })

    // this.spinner.show();
    this.data.archive().subscribe((info: any) => {
      // this.info = info
      console.log(info);
      
    })

  }
  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


  addItem(newItem: string) {
    // this.items.push(newItem);
    this.menuValue = newItem
    alert(this.menuValue)
    this.data.topStories(newItem).subscribe(val =>{
      this.topStoryData = val
      console.log("val:",this.topStoryData);
      
    })

  }


}
